import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import { Grid, GridColumn } from "semantic-ui-react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import swal from "sweetalert";
export default function JodAdvertisementConfirmation() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  let jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getByIsConfirm()
      .then((result) => setJobAdvertisements(result.data.data));

  }, []);
  const handleConfirmTrue =(jobAdvertisementId) =>{
    jobAdvertisementService.confirm(jobAdvertisementId).then(
      swal({
        title: "Teşekkürler",
        text: "İlan Onaylandı",
        icon: "success",
        button: "Tamam",
      }).then(function () {
        window.location.reload();
      })

    )
  }


  const handleConfirmFalse = (jobAdvertisementId) =>{

      swal({
        title: "Emin misiniz ?",
        text: "Eğer ilanı silerseniz tekrar dönüşü olmayacaktır...",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          jobAdvertisementService.delete(jobAdvertisementId)
          swal("İş ilanı silindi", {
            icon: "success",
          });
        } else {
        }
      }).then(function () {
        window.location.reload();
      })
    

  }

  return (
    <div>
      <Grid>
        <GridColumn width={14} style={{ margin: "0px 100px 0px 100px" }}>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Card fluid key={jobAdvertisement.id}>
              <Card.Content>
                {" "}
                <Image
                  src="http://www.clker.com/cliparts/d/Y/D/R/i/p/building-outline-hi.png"
                  floated="left"
                  size="mini"
                />
                <Card.Header textAlign="left">
                  <Button
                    onClick={(e)=>handleConfirmTrue(jobAdvertisement.id)}
                    size="tiny"
                    icon="check"
                    floated="right"
                    compact
                    color="vk"
                  />
                  <Button
                    onClick={(e)=>handleConfirmFalse(jobAdvertisement.id)}
                    size="tiny"
                    icon="x"
                    floated="right"
                    compact
                    color="vk"
                  />
                  {jobAdvertisement.employer?.companyName}
                </Card.Header>
                <Card.Meta textAlign="left">
                  <span className="positionName">
                    {jobAdvertisement.jobPositionId?.positionName}
                  </span>
                </Card.Meta>
              </Card.Content>

              <Card.Content>
                <Card.Description textAlign="left">
                  {jobAdvertisement.jobDescription}
                </Card.Description>
              </Card.Content>

              <Card.Content>
                <small style={{ margin: "1px 25px 1px" }}>
                  <Icon name="warehouse" />
                  {jobAdvertisement.city?.name}
                </small>
                <small style={{ margin: "1px 25px 1px" }}>
                  <Icon name="clock outline" />
                  {jobAdvertisement.jobTime?.time}
                </small>
                <small style={{ margin: "1px 25px 1px" }}>
                  <Icon name="road" />
                  {jobAdvertisement.jobType?.type}
                </small>
                <small style={{ margin: "1px 25px 1px" }}>
                  <Icon name="lira sign" />
                  Maaş: {jobAdvertisement.minSalary}-
                  {jobAdvertisement.maxSalary}
                </small>

                <small style={{ margin: "1px 25px 1px" }}>
                  <Icon name="user outline" />
                  Açık Pozisyon: {jobAdvertisement.openPositions}
                </small>
                <small style={{ margin: "1px 25px 1px" }}>
                  <Icon name="checked calendar" />
                  Yayınlanma Tarihi:{" "}
                  {jobAdvertisement.releaseDate.substring(0, 10)}
                </small>
                <small style={{ margin: "1px 25px 1px" }}>
                  <Icon name="delete calendar" />
                  Son Başvuru Tarihi:{" "}
                  {jobAdvertisement.lastDate.substring(0, 10)}
                </small>
              </Card.Content>
            </Card>
          ))}
        </GridColumn>
      </Grid>
    </div>
  );
}
