import React, { useState, useEffect } from "react";
import {
  Card,
  Form,
  Button,
  Dropdown,
  Input,
  TextArea,
} from "semantic-ui-react";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import CityService from "../../services/CityService";
import JobPositionService from "../../services/JobPositionService";
import JobTypeService from "../../services/JobTypeService";
import JobTimeService from "../../services/JobTimeService";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

export default function JobAdvAdd() {
  let jobAdvertisementService = new JobAdvertisementService();
  const [jobPositions, setjobPositions] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobTypes, setjobTypes] = useState([]);
  const [jobTimes, setjobTimes] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    let cityService = new CityService();
    let jobTypeService = new JobTypeService();
    let jobTimesService = new JobTimeService();

    cityService.getAllCity().then((result) => setCities(result.data.data));
    jobTypeService.getAll().then((result) => setjobTypes(result.data.data));
    jobTimesService.getAll().then((result) => setjobTimes(result.data.data));
    jobPositionService
      .getAllJobPositions()
      .then((result) => setjobPositions(result.data.data));
  }, []);

  const jobTypeOption = jobTypes.map((jobType, index) => ({
    key: index,
    text: jobType.type,
    value: jobType.id,
  }));

  const jobTimeOption = jobTimes.map((jobTime, index) => ({
    key: index,
    text: jobTime.time,
    value: jobTime.id,
  }));

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));

  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.positionName,
    value: jobPosition.id,
  }));

  const validationSchema = Yup.object().shape({
    cityId: Yup.string().required("Lütfen Şehir Seçiniz"),
    jobPositionId: Yup.string().required("Lütfen Pozisyon Seçiniz"),
    jobTypeId: Yup.string().required("Lütfen İş Türü Seçiniz"),
    jobTimeId: Yup.string().required("Lütfen Çalışma Zamanı Seçiniz"),
    jobDescription: Yup.string().required("Lütfen Açıklama Giriniz"),
    openPosition: Yup.number().required("Lütfen Pozisyon Sayısını Giriniz"),
    minSalary: Yup.number(),
    maxSalary: Yup.number(),
    lastDate: Yup.string().required("Son Başvuru Tarihi Giriniz"),
  });
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      jobPositionId: "",
      cityId: "",
      jobTypeId: "",
      jobTimeId: "",
      minSalary: null,
      maxSalary: null,
      openPosition: null,
      jobDescription: "",
      lastDate: "",
      releaseDate: new Date()
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.employerId = 1;
      jobAdvertisementService
        .add(values)
        .then((result) => console.log(result.data.data));
        swal({
          title: "Teşekkürler",
          text: "İlan Onaylandı",
          icon: "success",
          button: "Tamam",
        }).then(function () {
          window.location.reload();
        })
        setTimeout(() => 400);
      history.push("/jobAdvertisement");
    },
  });

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div
      className="container"
      style={{ height: "100%", padding: "0px 200px 0px 200px" }}
    >
      <Card fluid className="card" style={{}}>
        <Card.Content header="İş İlanı" />
        <Card.Content textAlign="right" style={{}}>
          <Form onSubmit={formik.handleSubmit} style={{}}>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="İş pozisyonu"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "jobPositionId")
                }
                onBlur={formik.onBlur}
                id="jobPositionId"
                value={formik.values.jobPositionId}
                options={jobPositionOption}
              />
              {formik.errors.jobPositionId && formik.touched.jobPositionId && (
                <div className={"ui pointing blue   basic label"}>
                  {formik.errors.jobPositionId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Şehir"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "cityId")
                }
                onBlur={formik.onBlur}
                id="cityId"
                value={formik.values.cityId}
                options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing blue   basic label"}>
                  {formik.errors.cityId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Çalışma Türü"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "jobTypeId")
                }
                onBlur={formik.onBlur}
                id="jobTypeId"
                value={formik.values.jobTypeId}
                options={jobTypeOption}
              />
              {formik.errors.jobTypeId && formik.touched.jobTypeId && (
                <div className={"ui pointing blue   basic label"}>
                  {formik.errors.jobTypeId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Çalışma Zamanı"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "jobTimeId")
                }
                onBlur={formik.onBlur}
                id="jobTimeId"
                value={formik.values.jobTimeId}
                options={jobTimeOption}
              />
              {formik.errors.jobTimeId && formik.touched.jobTimeId && (
                <div className={"ui pointing blue   basic label"}>
                  {formik.errors.jobTimeId}
                </div>
              )}
            </Form.Field>
            <Form.Field
              control={Input}
              placeholder="Minimum Maaş"
              onBlur={formik.handleBlur}
              id="minSalary"
              value={formik.values.minSalary}
              onChange={formik.handleChange}
            >
              {formik.errors.minSalary && formik.touched.minSalary && (
                <div className={"ui pointing blue   basic label"}>
                  {formik.errors.minSalary}
                </div>
              )}
            </Form.Field>
            <Form.Field
              control={Input}
              placeholder="Maximum Maaş"
              onBlur={formik.handleBlur}
              id="maxSalary"
              value={formik.values.maxSalary}
              onChange={formik.handleChange}
            >
              {formik.errors.maxSalary && formik.touched.maxSalary && (
                <div className={"ui pointing blue   basic label"}>
                  {formik.errors.maxSalary}
                </div>
              )}
            </Form.Field>

            <Form.Field
              control={Input}
              placeholder="Açık Pozisyon Adedi"
              onBlur={formik.handleBlur}
              id="openPosition"
              value={formik.values.openPosition}
              onChange={formik.handleChange}
            >
              {formik.errors.openPosition && formik.touched.openPosition && (
                <div className={"ui pointing blue   basic label"}>
                  {formik.errors.openPosition}
                </div>
              )}
            </Form.Field>
            <Form.Field
              control={TextArea}
              placeholder="İş Tanımı"
              onBlur={formik.handleBlur}
              id="jobDescription"
              value={formik.values.jobDescription}
              onChange={formik.handleChange}
            >
              {formik.errors.jobDescription && formik.touched.jobDescription && (
                <div className={"ui pointing blue   basic label"}>
                  {formik.errors.jobDescription}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Input
                style={{ width: "100%" }}
                type="date"
                error={Boolean(formik.errors.lastDate)}
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "lastDate")
                }
                value={formik.values.lastDate}
                onBlur={formik.handleBlur}
                name="lastDate"
              />
              {formik.errors.lastDate && formik.touched.lastDate && (
                <div className={"ui pointing blue   basic label"}>
                  {formik.errors.lastDate}
                </div>
              )}
            </Form.Field>

            <Form.Field>
              <Button
                fluid
                content="Yayınla"
                labelPosition="right"
                icon="check circle"
                color="vk"
                type="submit"
                id="submit"
              />
            </Form.Field>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
