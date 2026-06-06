"use client"

import { useState, useRef, useCallback, forwardRef, useEffect } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import HTMLFlipBook from "react-pageflip"
import {
  ChevronLeft, ChevronRight, Download, Maximize2,
  ZoomIn, ZoomOut, List, LayoutGrid, Share2, Minimize2
} from "lucide-react"

import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

/* ─── Individual book page ─────────────────────────────────── */
const BookPage = forwardRef<
  HTMLDivElement,
  { pageNum: number; width: number; height: number }
>(({ pageNum, width, height }, ref) => (
  <div ref={ref} style={{ width, height, overflow: "hidden", background: "#fff" }}>
    <Page pageNumber={pageNum} width={width} renderAnnotationLayer={false} renderTextLayer={false} />
  </div>
))
BookPage.displayName = "BookPage"

/* ─── Main viewer ──────────────────────────────────────────── */
export default function BrochureViewer() {
  const [numPages, setNumPages]     = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [loading, setLoading]       = useState(true)
  const [pageSize, setPageSize]     = useState({ w: 400, h: 566 })
  const [zoom, setZoom]             = useState(1)
  const [fullscreen, setFullscreen] = useState(false)
  const [thumbnails, setThumbnails] = useState(false)
  const [inputPage, setInputPage]   = useState("")
  const flipRef   = useRef<any>(null)
  const wrapRef   = useRef<HTMLDivElement>(null)

  /* Viewport-aware page sizing */
  useEffect(() => {
    const calc = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight - 240
      const maxSpreadW = Math.min(vw - 80, 1100)
      let pageW = Math.floor(maxSpreadW / 2)
      let pageH = Math.floor(pageW * 1.414)
      if (pageH > vh) { pageH = vh; pageW = Math.floor(pageH / 1.414) }
      setPageSize({ w: Math.max(pageW, 300), h: Math.max(pageH, 424) })
    }
    calc()
    window.addEventListener("resize", calc)
    return () => window.removeEventListener("resize", calc)
  }, [])

  const onDocLoad = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages); setLoading(false)
  }, [])

  const goPrev = () => flipRef.current?.pageFlip()?.flipPrev()
  const goNext = () => flipRef.current?.pageFlip()?.flipNext()
  const onFlip = useCallback((e: { data: number }) => setCurrentPage(e.data), [])

  /* Jump to page */
  const jumpToPage = (n: number) => {
    const spread = Math.floor((n - 1) / 2)
    flipRef.current?.pageFlip()?.flip(Math.max(0, spread))
  }

  const totalSpreads = Math.ceil(numPages / 2)
  const isCover  = currentPage === 0
  const isLast   = currentPage >= totalSpreads - 1
  const leftPage = isCover ? null : currentPage * 2 - 1
  const rightPage = isCover ? 1 : currentPage * 2

  /* Centre offset: cover & last page are single pages in the RIGHT half of the
     double-width book container. Shift LEFT by half a page width so the single
     page lands visually in the centre of the viewport.                         */
  const isSingle = isCover || (numPages % 2 !== 0 && isLast)
  const centreOffset = isSingle ? -(pageSize.w / 2) : 0

  /* Fullscreen */
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      wrapRef.current?.requestFullscreen?.()
      setFullscreen(true)
    } else {
      document.exitFullscreen?.()
      setFullscreen(false)
    }
  }

  /* Share */
  const handleShare = async () => {
    try {
      await navigator.share({ title: "Verivance Brochure", url: window.location.href })
    } catch { /* clipboard fallback */
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const zoomIn  = () => setZoom(z => Math.min(z + 0.15, 2))
  const zoomOut = () => setZoom(z => Math.max(z - 0.15, 0.5))

  const pageLabel = isCover ? 1 : currentPage * 2
  const progress  = ((currentPage + 1) / totalSpreads) * 100

  return (
    <div ref={wrapRef} className="flex flex-col items-center w-full py-8 px-4 select-none"
      style={{ minHeight: "calc(100vh - 160px)" }}>

      {/* Loading */}
      {loading && (
        <div className="flex flex-col items-center gap-3 text-white/50 py-24">
          <div className="w-10 h-10 border-2 border-[#2ec4cc]/30 border-t-[#2ec4cc] rounded-full animate-spin" />
          <p className="text-sm tracking-wide">Loading brochure…</p>
        </div>
      )}

      <Document file="/brochures/verivance-training-academy-brochure.pdf"
        onLoadSuccess={onDocLoad} loading="">
        {!loading && numPages > 0 && (
          <div className="flex flex-col items-center gap-6">

            {/* ── Book + side arrows ── */}
            <div className="relative flex items-center"
              style={{ gap: "28px" }}>

              {/* LEFT arrow */}
              <button
                onClick={goPrev}
                disabled={isCover}
                aria-label="Previous page"
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed hover:scale-110 active:scale-95 z-10"
                style={{
                  background: isCover
                    ? "rgba(255,255,255,0.05)"
                    : "linear-gradient(135deg,#0b3c5d,#2ec4cc)",
                  boxShadow: isCover ? "none" : "0 4px 20px rgba(46,196,204,0.4)",
                  border: "1px solid rgba(46,196,204,0.2)",
                }}
              >
                <ChevronLeft size={22} />
              </button>

            <div style={{ transform: `scale(${zoom})`, transformOrigin: "top center", transition: "transform 0.3s" }}>
              <div style={{
                transform: `translateX(${centreOffset}px)`,
                transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
                filter: "drop-shadow(0 0 30px rgba(46,196,204,0.1)) drop-shadow(0 25px 50px rgba(0,0,0,0.75))",
              }}>
                {/* Spine glow */}
                <div className="absolute top-0 bottom-0 pointer-events-none z-20"
                  style={{ left: "50%", width: "2px", transform: "translateX(-50%)",
                    background: "linear-gradient(to bottom,rgba(46,196,204,0.7),rgba(46,196,204,0.15))",
                    display: isSingle ? "none" : "block" }} />

                <HTMLFlipBook ref={flipRef}
                  width={pageSize.w} height={pageSize.h}
                  size="fixed"
                  minWidth={pageSize.w} maxWidth={pageSize.w}
                  minHeight={pageSize.h} maxHeight={pageSize.h}
                  showCover drawShadow
                  flippingTime={750}
                  usePortrait={false}
                  startZIndex={0} autoSize={false}
                  clickEventForward useMouseEvents
                  swipeDistance={30} showPageCorners
                  disableFlipByClick={false}
                  maxShadowOpacity={0.55}
                  mobileScrollSupport={false}
                  onFlip={onFlip}
                  className="" style={{}}
                  startPage={0}
                >
                  {Array.from({ length: numPages }, (_, i) => (
                    <BookPage key={i} pageNum={i + 1} width={pageSize.w} height={pageSize.h} />
                  ))}
                </HTMLFlipBook>
              </div>
            </div>

              {/* RIGHT arrow */}
              <button
                onClick={goNext}
                disabled={isLast}
                aria-label="Next page"
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed hover:scale-110 active:scale-95 z-10"
                style={{
                  background: isLast
                    ? "rgba(255,255,255,0.05)"
                    : "linear-gradient(135deg,#0b3c5d,#2ec4cc)",
                  boxShadow: isLast ? "none" : "0 4px 20px rgba(46,196,204,0.4)",
                  border: "1px solid rgba(46,196,204,0.2)",
                }}
              >
                <ChevronRight size={22} />
              </button>

            </div>{/* end book + side arrows */}

            {/* ── Premium toolbar (like medlineacademics) ── */}
            <div className="flex items-center gap-1 px-4 py-2.5 rounded-2xl border border-white/10"
              style={{
                background: "rgba(11,28,45,0.85)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(46,196,204,0.1)",
              }}>

              {/* Prev */}
              <ToolbarBtn onClick={goPrev} disabled={isCover} title="Previous page">
                <ChevronLeft size={18} />
              </ToolbarBtn>

              {/* Page input */}
              <div className="flex items-center gap-1.5 px-3">
                <input
                  type="number"
                  min={1} max={numPages}
                  value={inputPage}
                  placeholder={String(pageLabel)}
                  onChange={e => setInputPage(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === "Enter") {
                      jumpToPage(Number(inputPage))
                      setInputPage("")
                    }
                  }}
                  className="w-10 text-center bg-transparent text-white text-sm font-semibold outline-none border-b border-white/20 focus:border-[#2ec4cc] transition"
                />
                <span className="text-white/30 text-sm">/</span>
                <span className="text-white/50 text-sm">{numPages}</span>
              </div>

              {/* Next */}
              <ToolbarBtn onClick={goNext} disabled={isLast} title="Next page">
                <ChevronRight size={18} />
              </ToolbarBtn>

              <Divider />

              {/* Thumbnails toggle */}
              <ToolbarBtn onClick={() => setThumbnails(t => !t)} active={thumbnails} title="Thumbnails">
                <LayoutGrid size={16} />
              </ToolbarBtn>

              <Divider />

              {/* Zoom out */}
              <ToolbarBtn onClick={zoomOut} disabled={zoom <= 0.5} title="Zoom out">
                <ZoomOut size={16} />
              </ToolbarBtn>

              {/* Zoom % */}
              <span className="text-white/40 text-xs w-10 text-center font-medium">
                {Math.round(zoom * 100)}%
              </span>

              {/* Zoom in */}
              <ToolbarBtn onClick={zoomIn} disabled={zoom >= 2} title="Zoom in">
                <ZoomIn size={16} />
              </ToolbarBtn>

              <Divider />

              {/* Fullscreen */}
              <ToolbarBtn onClick={toggleFullscreen} title={fullscreen ? "Exit fullscreen" : "Fullscreen"}>
                {fullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              </ToolbarBtn>

              {/* Share */}
              <ToolbarBtn onClick={handleShare} title="Share">
                <Share2 size={16} />
              </ToolbarBtn>

              {/* Download */}
              <a href="/brochures/verivance-training-academy-brochure.pdf" download title="Download PDF"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#2ec4cc] hover:bg-[#2ec4cc]/15 transition-all duration-200 hover:scale-110">
                <Download size={16} />
              </a>
            </div>

            {/* Progress bar */}
            <div className="w-64 h-0.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, background: "linear-gradient(to right,#0b3c5d,#2ec4cc)" }} />
            </div>

            {/* Thumbnails strip */}
            {thumbnails && (
              <div className="flex gap-2 overflow-x-auto pb-2 max-w-3xl px-2"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#2ec4cc33 transparent" }}>
                {Array.from({ length: numPages }, (_, i) => (
                  <button key={i}
                    onClick={() => jumpToPage(i + 1)}
                    className="shrink-0 rounded overflow-hidden border-2 transition-all hover:scale-105"
                    style={{
                      borderColor: (isCover ? 1 : currentPage * 2) === i + 1 || (!isCover && currentPage * 2 + 1 === i + 1)
                        ? "#2ec4cc" : "transparent",
                    }}>
                    <Page pageNumber={i + 1} width={70} renderAnnotationLayer={false} renderTextLayer={false} />
                  </button>
                ))}
              </div>
            )}

          </div>
        )}
      </Document>
    </div>
  )
}

/* ─── Small reusable toolbar button ───────────────────────── */
function ToolbarBtn({ children, onClick, disabled, active, title }: {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  active?: boolean
  title?: string
}) {
  return (
    <button onClick={onClick} disabled={disabled} title={title}
      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:scale-100"
      style={{
        color: active ? "#2ec4cc" : "rgba(255,255,255,0.7)",
        background: active ? "rgba(46,196,204,0.15)" : "transparent",
      }}
      onMouseEnter={e => !disabled && ((e.currentTarget as HTMLElement).style.background = active ? "rgba(46,196,204,0.25)" : "rgba(255,255,255,0.08)")}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = active ? "rgba(46,196,204,0.15)" : "transparent")}
    >
      {children}
    </button>
  )
}

function Divider() {
  return <div className="w-px h-5 bg-white/10 mx-1" />
}
