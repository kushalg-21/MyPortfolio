export function Monogram() {
  return (
    <figure className="monogram">
      <div className="monogram__frame" aria-hidden="true">
        <span className="monogram__tag">KG</span>
        <span className="monogram__index">001</span>
        <span className="monogram__glyph">K</span>
        <span className="monogram__chip" />
        <div className="monogram__meta">
          <span>CMR University</span>
          <span>B.Tech CSE</span>
          <span>Year 03</span>
        </div>
      </div>
      <figcaption className="monogram__caption">
        <span>Identity / study 01</span>
        <span>KG—26</span>
      </figcaption>
    </figure>
  )
}
