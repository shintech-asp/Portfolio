import { useEffect, useRef } from 'react'

// One scroll listener and one rAF loop for the whole page, however many
// layers register. Each layer says how far it drifts and what it measures
// against: the page scroll, or its own position in the viewport.

const layers = new Set()
let ticking = false
let started = false

function paint() {
  ticking = false
  const vh = window.innerHeight || 1
  const y = window.scrollY || window.pageYOffset || 0

  layers.forEach((layer) => {
    const el = layer.el
    if (!el) return
    let shift
    if (layer.mode === 'page') {
      shift = y * layer.factor
    } else {
      const box = el.getBoundingClientRect()
      const fromCentre = (box.top + box.height / 2 - vh / 2) / vh
      shift = fromCentre * layer.factor * 100
    }
    el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`
  })
}

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(paint)
}

function start() {
  if (started) return
  started = true
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  paint()
}

export default function useParallax(factor, mode = 'element') {
  const ref = useRef(null)

  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (calm.matches) return

    const layer = { el: ref.current, factor, mode }
    layers.add(layer)
    start()
    onScroll()

    return () => {
      layers.delete(layer)
      if (layer.el) layer.el.style.transform = ''
    }
  }, [factor, mode])

  return ref
}
