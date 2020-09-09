import { Button, Card, CardActions, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';

const HappyEmployee = ({ employee }: any) => {

    const [emp, setEmp] = useState(employee);

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
                                subheader="Edit"></CardHeader>
                            <CardContent>
                                <Grid container direction="column" spacing={2}>

                                    <Grid item container justify="space-between" spacing={2} alignItems="center">

                                        <Grid item xs>
                                            <Field name="firstName" label="First Name" as={TextField} variant="outlined" fullWidth></Field>
                                        </Grid>
                                        <Grid item>
                                            <Field name="lastName" label="Last Name" as={TextField} variant="outlined" fullWidth></Field>
                                        </Grid>
                                    </Grid>

                                    <Grid item container justify="space-between" spacing={2} alignItems="center">

                                        <Grid item >
                                            <Field name="birthDate" label="Birth Date" as={TextField} variant="outlined" type="date" fullWidth InputLabelProps={{ shrink: true }}></Field>
                                        </Grid>
                                        <Grid item xs>
                                            <Field name="deceaced" label="Deceaced" as={FormControlLabel} control={<Checkbox />} fullWidth></Field>
                                        </Grid>

                                        <Grid item >
                                            <FormControl>
                                                <FormLabel>Gender</FormLabel>
                                                <Field name="gender" as={RadioGroup} variant="outlined" row>
                                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                </Field>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item container justify="space-between" spacing={2} alignItems="center">

                                        <Grid item xs>
                                            <FormControl fullWidth>
                                                <FormLabel>Country</FormLabel>

                                                <Field name="country" label="Country" as={Select} variant="outlined" >
                                                    <MenuItem value="usa">United State</MenuItem>
                                                    <MenuItem value="greece">Greece</MenuItem>
                                                    <MenuItem value="france">France</MenuItem>
                                                    <MenuItem value="denmark">Denmark</MenuItem>
                                                    <MenuItem value="switzerland">Switzerland</MenuItem>

                                                </Field>
                                            </FormControl>
                                        </Grid>
                                        <Grid item >
                                            <Field name="empTime" label="Employee Time" as={TextField} type="time" variant="outlined" fullWidth InputLabelProps={{ shrink: true }}></Field>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary" size="small" type="submit">Submit</Button>
                            </CardActions>
                        </Card>
                    </Form>
                )
                }
            </Formik >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%', margin: '1rem auto', backgroundColor: 'hsl(140,100%,95%)' }}>
                {JSON.stringify(emp, null, 2)}
            </div>
            <Card variant="outlined" >
                <CardHeader
                    title="Employee Form"
                    subheader="View"></CardHeader>
                <CardContent>
                    <Grid container direction="column" spacing={2}>

                        <Grid item container justify="space-between" spacing={2} alignItems="center">

                            <Grid item xs>
                                <Typography variant="h6">First Name</Typography>
                                <Typography color="textSecondary">{emp.firstName}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h6">Last Name</Typography>
                                <Typography color="textSecondary">{emp.lastName}</Typography>

                            </Grid>
                        </Grid>

                        <Grid item container justify="space-between" spacing={2} alignItems="center">

                            <Grid item >
                                <Typography variant="h6">Birth Date</Typography>
                                <Typography color="textSecondary">{emp.birthDate}</Typography>

                            </Grid>
                            <Grid item xs>
                                <Typography variant="h6">Deceaced</Typography>
                                <Typography color="textSecondary">{emp.deceaced}</Typography>

                            </Grid>

                            <Grid item xs={2}>
                                <Typography variant="h6">Gender</Typography>
                                <Typography color="textSecondary">{emp.gender}</Typography>

                            </Grid>
                        </Grid>

                        <Grid item container justify="space-between" spacing={2} alignItems="center">

                            <Grid item xs>
                                <Typography variant="h6">Country</Typography>
                                <Typography color="textSecondary">{emp.country}</Typography>

                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h6">Employee Time</Typography>
                                <Typography color="textSecondary">{emp.empTime}</Typography>

                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>

            </Card>

        </div >



    )
}

export default HappyEmployee;