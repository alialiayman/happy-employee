import { Button, Card, CardActions, CardContent, CardHeader, FormControlLabel, Switch, TextField } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';

const HappyEmployee = ({ employee }: any) => {

    const [editMode, setEditMode] = useState(false);
    const [emp, setEmp] = useState(employee || { firstName: '', lastName: '' });

    return (
        <div style={{ padding: '2rem' }}>
            <Formik
                initialValues={emp}
                onSubmit={(values, actions) => {
                    setEmp(values);
                    actions.setSubmitting(false);

                }}
            >
                {({ handleSubmit }) => (
                    <Form>
                        <Card raised>
                            <CardHeader
                                title="Employee Form"
                                subheader="View or Edit"></CardHeader>
                            <CardContent>

                                <FormControlLabel
                                    control={<Switch checked={editMode} onChange={() => setEditMode(prev => !prev)} />}
                                    label="Edit"
                                />


                            <Field name="firstName" label="First Name" as={TextField} variant="outlined" fullWidth></Field>
                            <Field name="lastName" label="Last Name" as={TextField} variant="outlined" fullWidth></Field>
                            </CardContent>
                        <CardActions>
                            <Button variant="contained" color="primary" size="small" type="submit">Submit</Button>
                        </CardActions>
                        </Card>
                    </Form>
                )
                }
            </Formik >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', width: '100%', padding: '1rem' }}>
            {JSON.stringify(emp, null, 2)}
        </div>
        </div >



    )
}

export default HappyEmployee;