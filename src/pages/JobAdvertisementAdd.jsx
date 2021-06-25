import JobPositionService from "../services/JobPositionService";
import JobTypeService from "../services/JobTypeService";
import JobTimeService from "../services/JobTimeService";
import React, { useState, useEffect } from "react";
import CityService from "../services/CityService";
import {Formik} from 'formik';
import * as Yup from "yup";
import {Icon} from 'semantic-ui-react'
import "./JobA.css"

export default function JobAdvertisementAdd() {
    const [jobPositions, setjobPositions] = useState([]);
    const [cities, setCities] = useState([]);
    const [jobTypes, setjobTypes] = useState([]);
    const [jobTimes, setjobTimes] = useState([]);
  
    useEffect(() => {
      let jobPositionService = new JobPositionService();
      jobPositionService
        .getAllJobPositions()
        .then((result) => setjobPositions(result.data.data));
    }, []);
    useEffect(() => {
      let cityService = new CityService();
      cityService.getAllCity().then((result) => setCities(result.data.data));
    }, []);
    useEffect(() => {
      let jobTypeService = new JobTypeService();
      jobTypeService.getAll().then((result) => setjobTypes(result.data.data));
    }, []);
    useEffect(() => {
      let jobTimesService = new JobTimeService();
      jobTimesService.getAll().then((result) => setjobTimes(result.data.data));
    }, []);
  
    return (
        <div className="container"> 
        <div className="brand-box"></div>
        <div className="form">
            <Formik
            initialValues={{
                companyName:"",
                jobPosition: "",
                city: "",
                jobType: "",
                jobTime: "",
                minSalary: null,
                maxSalary: null,
                openPosition: null,
                jobDescription: "",
                lastDate: new Date(),
            }}
            validationSchema={Yup.object({
            companyName:Yup.string().required("Şirket Adı Giriniz"),
            city: Yup.string().required("Lütfen Şehir Seçiniz"),
            jobPosition: Yup.string().required("Lütfen Pozisyon Seçiniz"),
            jobType: Yup.string().required("Lütfen İş Türü Seçiniz"),
            jobTime: Yup.string().required("Lütfen Çalışma Zamanı Seçiniz"),
            jobDescription: Yup.string().required("Lütfen Açıklama Giriniz"),
            openPosition: Yup.number().required("Lütfen Pozisyon Sayısını Giriniz"),
            minSalary: Yup.number(),
            maxSalary: Yup.number(),
            })}
            onSubmit={(values, {resetForm , setSubmitting}) =>{
                console.log(values)
            }}
            >
            
            {({values,errors , handleSubmit , handleReset , handleChange,handleBlur,dirty,isSubmitting,touched})=>(
                <form onSubmit={handleSubmit}>
                    <h3 className="header">İş İlanı</h3>
                    <label htmlFor="companyName" className="label">Şirket Adı</label>
                    <input  id="companyName" className="inputs" type="text" onChange={handleChange} value={values.companyName} onBlur={handleBlur} />
                    {errors.companyName && touched.companyName &&(<div className="input-feedback">{errors.companyName}</div>)}

                    <label htmlFor="jobPosition" className="label">İş Pozisyonu</label>
                    <select  id="jobPosition" className="inputs" onChange={handleChange} value={values.jobPosition} onBlur={handleBlur}>
                    <option value="" label="..."/>
                        {   jobPositions.map((jobPosition)=>(
                            <option value="{jobPosition.positionName}">{jobPosition.positionName}</option>))}
                    </select>
                    {errors.jobPosition && touched.jobPosition &&(<div className="input-feedback">{errors.jobPosition}</div>)}


                    <label htmlFor="city" className="label">Şehir</label>
                    <select  id="city" className="inputs" onChange={handleChange} value={values.city} onBlur={handleBlur}>
                    <option value="" label="..."/>
                        {   cities.map((city)=>(
                            <option value="{city.name}">{city.name}</option>))}
                    </select>
                    {errors.city && touched.city &&(<div className="input-feedback">{errors.city}</div>)}


                    <label htmlFor="jobType" className="label">Çalışma Türü</label>
                    <select  id="jobType" className="inputs" onChange={handleChange} value={values.jobType} onBlur={handleBlur}>
                    <option value="" label="..."/>
                        {   jobTypes.map((jobType)=>(
                            <option value="{jobType.name}">{jobType.type}</option>))}
                    </select>
                    {errors.jobType && touched.jobType &&(<div className="input-feedback">{errors.jobType}</div>)}

                    <label htmlFor="jobTime" className="label">Çalışma Zamanı</label>
                    <select  id="jobTime" className="inputs" onChange={handleChange} value={values.jobTime} onBlur={handleBlur}>
                    <option value="" label="..."/>
                        {   jobTimes.map((jobTime)=>(
                            <option value="{jobTime.time}">{jobTime.time}</option>))}
                    </select>
                    {errors.jobTime && touched.jobTime &&(<div className="input-feedback">{errors.jobTime}</div>)}

                    <label htmlFor="minSalary" className="label">Min Maaş</label>
                    <input  id="minSalary" className="inputs" type="text" onChange={handleChange} value={values.minSalary} onBlur={handleBlur} />
                    {errors.minSalary && touched.minSalary &&(<div className="input-feedback">{errors.minSalary}</div>)}

                    <label htmlFor="maxSalary" className="label">Max Maaş</label>
                    <input  id="maxSalary" className="inputs" type="text" onChange={handleChange} value={values.maxSalary} onBlur={handleBlur} />
                    {errors.maxSalary && touched.maxSalary &&(<div className="input-feedback">{errors.maxSalary}</div>)}
                    
                    <label htmlFor="openPosition" className="label">Açık Pozisyon Adedi</label>
                    <input  id="openPosition" className="inputs" type="text" onChange={handleChange} value={values.openPosition} onBlur={handleBlur} />
                    {errors.openPosition && touched.openPosition &&(<div className="input-feedback">{errors.openPosition}</div>)}

                    <label htmlFor="jobDescription" className="label">Genel İş Tanımı </label>
                    <textarea id="jobDescription" className="textarea" onChange={handleChange} value={values.description} onBlur={handleBlur}/>
                    {errors.jobDescription && touched.jobDescription &&(<div className="input-feedback">{errors.jobDescription}</div>)}

                    <label htmlFor="lastDate" className="label">Son Başvuru Tarihi</label>
                    <input  id="lastDate" className="inputs" type="date" onChange={handleChange} value={values.lastDate} onBlur={handleBlur} />
                    {errors.lastDate && touched.lastDate &&(<div className="input-feedback">{errors.lastDate}</div>)}

                    <button type="submit" className="button" disabled={!dirty||isSubmitting} >
                     <Icon name="check"/>Yayınla
                    </button>
                        <br />

                </form>

            )}

            </Formik>


        </div>
            
        </div>
    )
}
