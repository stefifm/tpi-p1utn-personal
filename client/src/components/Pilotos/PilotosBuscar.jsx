import { useContext } from 'react'
import { F1Context } from '../../Context/Context'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PilotosBuscar = () => {
  const { NombrePiloto, setNombrePiloto, Campeon, setCampeon, buscarPilotos } =
    useContext(F1Context)

  return (
    <Form
      className='form-search'
      onSubmit={(e) => e.preventDefault()}>
      <div className='container-fluid'>
        <Row>
          <Col>
            <Form.Group>
              <Row>
                <Col
                  xs={2}
                  className='ps-4 pt-2'>
                  <Form.Label>Nombre:</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type='text'
                    placeholder='Nombre'
                    onChange={(e) => setNombrePiloto(e.target.value)}
                    value={NombrePiloto}
                    maxLength='55'
                    autoFocus
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Row>
                <Col
                  xs={2}
                  className='ps-4 pt-2'>
                  <Form.Label>Campeon:</Form.Label>
                </Col>
                <Col>
                  <Form.Select
                    onChange={(e) => setCampeon(e.target.value)}
                    value={Campeon}>
                    <option value={null}></option>
                    <option value={false}>NO</option>
                    <option value={true}>SI</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>

        <hr />

        <Row className='align-items-center m-auto'>
          <Col xs='auto ms-auto'>
            <Button
              variant='primary'
              type='button'
              className='btn-buscar'
              onClick={() => buscarPilotos(1)}>
              <i className='fa fa-search'> </i> Buscar
            </Button>
          </Col>
          <Col xs='auto me-auto'>
            <Button
              variant='primary'
              type='button'
              className='btn-agregar'>
              <i className='fa fa-plus'> </i> Agregar
            </Button>
          </Col>
        </Row>
      </div>
    </Form>
  )
}

export default PilotosBuscar
