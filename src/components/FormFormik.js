import { useFormik } from 'formik';
//import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
import { CustomerService } from '../services';

function FormFormik () {

    const initialValues = {
        name: '',
        lastName: '',
        cellPhone:'',
        address:'',
        zipCode:''
    }

    const validate = values => {
        console.log(values);
        const errors = {};

        if(!values.name) {
            errors.name = 'Required';
        }

        if(!values.lastName) {
            errors.lastName = 'Required';
        }

        if(!values.zipCode) {
            errors.zipCode = 'Required';
        } else if (!/^\d{5}(?:[-\s]\d{4})?$/i.test(values.zipCode)) {
            errors.zipCode = 'Invalid Zip code';
        }

        if(!values.address) {
            errors.address = 'Required';
        }
      

        return errors;
    }

    // const validateSchema = yup.object().shape({
    //     name: yup.string()
    //             .required('Required'),
    //     lastName: yup.string()
    //             .email('Invalida Email format')
    //             .required('required'),
    //     cellPhone: yup.string()
    //             .required('Required'),
    //     address: yup.string()
    //                 .required('Required'),
    //     zipCode: yup.string()
    //             .required('required'),
    // })

   // console.log(yup);

    const onSubmit = values => {
       /// console.log(values);
        CustomerService.saveCustomer(values)
            .then(res => {
                console.log(res);
            })
    }

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit,
    });

   // console.log(formik.errors.email)
    return (
        <form noValidate onSubmit={formik.handleSubmit} className='container'>
            <h1> Form Example </h1>
            <Container>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name='name'
                                type="text" 
                                placeholder="Name" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                />
                            {formik.touched.name && formik.errors.name? (
                                <Alert variant='danger'>{formik.errors.name}</Alert>
                            ) : null }
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                id="lastName" 
                                type="text" 
                                placeholder="Last Name"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                />

                            {formik.touched.lastName && formik.errors.lastName? (
                                <Alert variant='danger'>{formik.errors.lastName}</Alert>
                            ) : null }
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Cellphone</Form.Label>
                            <Form.Control
                                id="cellPhone" 
                                type="text" 
                                placeholder="Cellphone"
                                onChange={formik.handleChange}
                                value={formik.values.cellPhone}
                                />

                            {formik.touched.cellPhone && formik.errors.cellPhone? (
                                <Alert variant='danger'>{formik.errors.cellPhone}</Alert>
                            ) : null }
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control 
                                id="zipCode"
                                type="text" 
                                placeholder="Zip code" 
                                onChange={formik.handleChange}
                                value={formik.values.zipCode}
                                />

                            {formik.touched.zipCode && formik.errors.zipCode? (
                                <Alert variant='danger'>{formik.errors.zipCode}</Alert>
                            ) : null }
                        </Form.Group>    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control 
                                id="address"
                                as="textarea" 
                                rows={3} 
                                onChange={formik.handleChange}
                                value={formik.values.address}
                                />

                            {formik.touched.address && formik.errors.address? (
                                <Alert variant='danger'>{formik.errors.address}</Alert>
                            ) : null }
                        </Form.Group> 
                    </Col>
                </Row>
            </Container>
            <Button type='submit' variant='primary'> Enviar </Button>
        </form>
        
    )
}

export {FormFormik}