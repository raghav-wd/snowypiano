import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
import { State } from '../../store'
import { useSelector } from 'react-redux'

export const Tracker = () => {
  const Container = styled.div`
    display: inline-block;
    font-size: 18px;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
    top: 60%;
  `
  const trackerState = useSelector((state: State) => state.tracker)

  return (
    <Container className="flex flex-col-reverse text-center border border-sky-400 px-2 py-4 absolute left-6">
      <div>
        <FontAwesomeIcon className="px-4" icon={faArrowRotateRight} />
      </div>
      <div className="my-4">
        <div>Hits</div>
        <div>{trackerState.hits}</div>
      </div>
      <div className="my-4">
        <div>Misses</div>
        <div>{trackerState.misses}</div>
      </div>
    </Container>
  )
}
