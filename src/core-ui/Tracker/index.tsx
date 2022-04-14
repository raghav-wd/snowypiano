import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'

export const Tracker = () => {
  const Container = styled.div`
    display: inline-block;
    font-size: 18px;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
  `
  return (
    <Container>
      <FontAwesomeIcon className="px-4" icon={faArrowRotateRight} />
      Hits: 123 | Misses: 2
    </Container>
  )
}
