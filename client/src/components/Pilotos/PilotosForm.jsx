import React from 'react'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button'

const PilotosForm = () => {
  return (
    <Form className='form-registro'>
      {/* Campo Nombre de Piloto */}
      <Form.Group className='mb-3'>
        <Form.Label>
          Nombre <span className='text-danger'>*</span>{' '}
        </Form.Label>
        <Form.Control
          type='text'
          name='NombrePiloto'
        />
      </Form.Group>

      {/* Campo FechaNacimiento */}
      <Form.Group className='mb-3'>
        <Form.Label>
          Fecha de Nacimiento <span className='text-danger'>*</span>
        </Form.Label>
        <Form.Control
          type='date'
          name='FechaNacimiento'
        />
      </Form.Group>

      {/* Campo Id Equipo de F1 */}
      <Form.Group className='mb-3'>
        <Form.Label>
          Equipo de F1 <span className='text-danger'>*</span>
        </Form.Label>
        <Form.Select name='IdEquipoF1'>
          <option value='1'>Viene del contexto</option>
        </Form.Select>
      </Form.Group>

      {/* Campo cantidad de carreras */}
      <Form.Group className='mb-3'>
        <Form.Label>
          Carreras disputadas <span className='text-danger'>*</span>
        </Form.Label>
        <Form.Control
          type='number'
          name='CantidadCarreras'
        />
      </Form.Group>

      {/* Campo Campeon */}
      <Form.Group className='mb-3'>
        <Form.Label>
          Campeón <span className='text-danger'>*</span>
        </Form.Label>
        <Form.Select name='Campeon'>
          <option value=''></option>
          <option value={true}>SI</option>
          <option value={false}>NO</option>
        </Form.Select>
      </Form.Group>

      {/* Botones */}
      <div className='botones-form'>
        <Button className='btn-save'>
          <i className='fa fa-save pe-1'></i> Guardar
        </Button>
        <Button className='btn-cancel'>
          <i className='fa fa-times pe-1'></i> Cancelar
        </Button>
      </div>
    </Form>
  )
}

export default PilotosForm
