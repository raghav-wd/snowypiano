// // https://www.uidownload.com/en/vector-miboo
import { useSelector } from 'react-redux'
import { State } from '../../store'

const SvgComponent = (props: any) => {
  const state = useSelector((state: State) => state.root.theme.note)
  const cleffState = useSelector((state: State) => state.root.theme.clef)

  return (
    <div style={{ transform: `translateY(1px)` }} className={props.class}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={(34.61 / 116.595) * cleffState.lineSpace * 4.16666667}
        height={1 * cleffState.lineSpace * 4.16666667}
        viewBox="0 0 32.447 109.307">
        <path
          style={{
            fill: state.color,
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 1.24164975,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          d="M125.373 80.943c-3.084-.04-6.422.734-9.578 2.222-6.942 3.277-11.826 9.414-12 15.08h-.014v91.252s-.076.442.363.628c.385.163 1.897.167 2.239 0 .363-.178.316-.628.316-.628v-84.464c3.902 3.368 10.903 3.541 17.506.433 8.652-4.079 13.782-12.378 11.459-18.537-1.389-3.68-5.24-5.92-10.291-5.986z"
          transform="translate(-103.776 -80.941)"
        />
      </svg>
    </div>
  )
}

export default SvgComponent
