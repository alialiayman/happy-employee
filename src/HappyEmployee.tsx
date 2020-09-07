import { Button, Card, CardActions, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@material-ui/core';
import 'date-fns';
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

                                <Grid container spacing={2} justify="space-between" >

                                    <Grid item xs >

                                        <Field name="givenName" label="Given Name(s)" as={TextField} variant="outlined" fullWidth ></Field>
                                    </Grid>
                                    <Grid item>
                                        <Field name="lastName" label="Last Name" as={TextField} variant="outlined"  ></Field>

                                    </Grid>

                                    <Grid item xs={12} container justify="space-between" alignItems="center" spacing={2}>
                                        <Grid item>

                                            <Field name="birthDate" label="Birth Date" as={TextField} variant="outlined" type="date" defaultValue="1900-01-01" ></Field>
                                        </Grid>
                                        <Grid item xs>

                                            <Field name="deceased" label="Deceaced" as={FormControlLabel} control={<Checkbox />} ></Field>
                                        </Grid>

                                        <Grid item>
                                            <Field name="gender" as={RadioGroup} label="Gender" row>
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />

                                            </Field>
                                        </Grid>

                                        <Grid item xs={12} container alignItems="center" justify="space-between" spacing={4}>
                                            <Grid item xs>
                                                <FormControl fullWidth>
                                                    <InputLabel>Country</InputLabel>
                                                    <Field name="country" as={Select} variant="filled" >
                                                        <MenuItem value={1}>USA</MenuItem>
                                                        <MenuItem value={44}>UK</MenuItem>
                                                        <MenuItem value={33}>France</MenuItem>
                                                    </Field>

                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Field name="empTime" as={TextField} type="time" label="Employee Time" InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
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
          
          <div>
              {JSON.stringify(emp)}
          </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }} >
                <Card variant="outlined" style={{ width: '100%', marginTop: '1rem' }} >
                    <CardHeader
                        title="Employee Form"
                        subheader="View"></CardHeader>
                    <CardContent>
                        <Grid container spacing={2} justify="space-between" >

                            <Grid item xs >
                                <Typography variant="h6">Given Names(s)</Typography>
                                <Typography variant="body1" color="textSecondary">{emp.givenName}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6">Last Name</Typography>
                                <Typography variant="body1" color="textSecondary">{emp.lastName}</Typography>

                            </Grid>

                            <Grid item xs={12} container justify="space-between" alignItems="center" spacing={2}>
                                <Grid item>

                                    <Typography variant="h6">Birth Date</Typography>
                                    <Typography variant="body1" color="textSecondary">{emp.birthDate}</Typography>
                                </Grid>
                                <Grid item xs>

                                    <Typography variant="h6">Deceaced</Typography>
                                    <Typography variant="body1" color="textSecondary">{emp.deceased? 'Yes': 'No'}</Typography>
                                </Grid>

                                <Grid item>

                                    <Typography variant="h6">Gender</Typography>
                                    <Typography variant="body1" color="textSecondary">{emp.gender}</Typography>
                                </Grid>

                                <Grid item xs={12} container alignItems="center" justify="space-between" spacing={4}>
                                    <Grid item xs>
                                        <FormControl fullWidth disabled>
                                            <InputLabel>Country</InputLabel>
                                            <Select value={emp.country}  >
                                                <MenuItem value={1}>USA</MenuItem>
                                                <MenuItem value={44}>UK</MenuItem>
                                                <MenuItem value={33}>France</MenuItem>
                                            </Select>

                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="h6">Time</Typography>
                                        <Typography variant="body1" color="textSecondary">{emp.empTime}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>

            </div>
        </div >



    )
}

export default HappyEmployee;