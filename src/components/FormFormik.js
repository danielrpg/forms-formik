import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function FormFormik () {

    const initialValues = {
        name: '',
        email: '',
        channel:''
    }

    const validate = values => {
        console.log(values);
        const errors = {};

        if(!values.name) {
            errors.name = 'Required';
        }

        if(!values.email) {
            errors.email = 'Email required';
        } else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
            errors.email = 'Invalid email format';
        }

        if(!values.channel) {
            errors.channel = 'Required';
        }

        return errors;
    }

    const onSubmit = values => {
        console.log(values);
    }

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit,
    });

    console.log(formik.errors.email)
    return (
        <form onSubmit={formik.handleSubmit}>
            <h1> Form Example </h1>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input 
                    type='text'
                    name='name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    />
                {formik.touched.name && formik.errors.name? (
                    <Alert variant='danger'>{formik.errors.name}</Alert>
                ) : null }
            </div>
            <div className='form-control'>
                <label htmlFor='name'>E-mail</label>
                <input 
                    type='text'
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    />
                {formik.touched.email && formik.errors.email? (
                    <Alert variant='danger'>{formik.errors.email}</Alert>
                ) : null }
            </div>
            <div className='form-control'>
                <label htmlFor='name'>Channel</label>
                <input 
                    type='text'
                    name='channel'
                    onChange={formik.handleChange}
                    value={formik.values.channel}
                    />
                {formik.touched.channel && formik.errors.channel? (
                    <Alert variant='danger'>{formik.errors.channel}</Alert>
                ) : null }
            </div>

            <Button type='submit'> Enviar </Button>
        </form>
        
    )
}

export {FormFormik}