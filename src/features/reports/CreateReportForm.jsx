import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import Button from "../../ui/Button";
import Textarea from "../../ui/TextArea";
import FileInput from "../../ui/FileInput";

import { useCreateReport } from "./useCreateReport";
import { getToday } from "../../utils/helpers";

function CreateReportForm() {
  const { isCreating, createReport } = useCreateReport();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    const initialImagesArray = [
      data.image1?.[0],
      data.image2?.[0],
      data.image3?.[0],
      data.image4?.[0],
      data.image5?.[0],
      data.image6?.[0],
      data.image7?.[0],
      data.image8?.[0],
      data.image9?.[0],
      data.image10?.[0],
    ];

    const images = initialImagesArray.filter((el) => el !== undefined);

    const cleanedData = {
      reportDate: getToday(),
      incidentDetails: data.incidentDetails,
      incidentDate: data.incidentDate,
      addressDetails: data.addressDetails,
      personDetails: data.personDetails,
      numPersons: data.numPersons,
      vehicleDetails: data.vehicleDetails,
      weaponsDetails: data.weaponsDetails,
      furtherInformation: data.furtherInformation,
      images,
    };

    createReport({ ...cleanedData, images }, { onSuccess: reset() });
  }

  function onError(errors) {
    console.log("Errors are: ", errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      {/* Incident details */}
      <FormRowVertical
        type="report"
        label="Please give details of the incident you wish to report. Describe everything you know in as much detail as possible."
      >
        <FormRow
          label="Incident details"
          error={errors?.incidentDetails?.message}
        >
          <TextArea
            id="incidentDetails"
            disabled={isCreating}
            {...register("incidentDetails", {
              required: "This field is required",
            })}
          />
        </FormRow>
      </FormRowVertical>

      {/* Incident date */}
      <FormRowVertical
        type="report"
        label="Date of the incident you are reporting. Please, mention the date you found out about this incident."
      >
        <FormRow label="Date of incident" error={errors?.incidentDate?.message}>
          <Input
            type="date"
            id="incidentDate"
            disabled={isCreating}
            {...register("incidentDate", {
              required: "This field is required",
              valueAsDate: true,
              validate: (value) =>
                new Date(value).toISOString() <= new Date().toISOString() ||
                "Incident date cannot be greater than report date",
            })}
          />
        </FormRow>
      </FormRowVertical>

      {/* Address details */}
      <FormRowVertical
        type="report"
        label="Where is the drugs trafficking activity taking place? Please give a full address if possible. If you are not sure about the full address, tell us anything else that will help us identify the location of the drugs activity."
      >
        <FormRow
          label="Address details"
          error={errors?.addressDetails?.message}
        >
          <Textarea
            id="addressDetails"
            disabled={isCreating}
            defaultValue={null}
            {...register("addressDetails")}
          />
        </FormRow>
      </FormRowVertical>

      {/* Person details */}
      <FormRowVertical
        type="report"
        label="If you are aware of the person(s) involved, please give details of the person(s), including name(s) and description, like the ethnicity, sex, age, rough height or build, hair colour/style, distinguishing features (including facial hair/tattoos)."
      >
        <FormRow
          label="Person(s) details"
          error={errors?.personDetails?.message}
        >
          <TextArea
            id="personDetails"
            disabled={isCreating}
            defaultValue={null}
            {...register("personDetails")}
          />
        </FormRow>
      </FormRowVertical>

      {/* Number of Persons */}
      <FormRowVertical
        type="report"
        label="If you are aware of the person(s) involved, please give details of the number of person(s) involved in this case."
      >
        <FormRow label="Number of People" error={errors?.numPersons?.message}>
          <Input
            type="number"
            id="numPersons"
            disabled={isCreating}
            defaultValue={null}
            {...register("numPersons", {
              valueAsNumber: true,
              min: {
                value: 0,
                message: "There should be atleast 1 person",
              },
            })}
          />
        </FormRow>
      </FormRowVertical>

      {/* Vehicles used */}
      <FormRowVertical
        type="report"
        label="Give details of any vehicle used. Please tell us everything you know about the vehicle(s) - registration number plate, colour, make, model, etc."
      >
        <FormRow
          label="Vehicle details"
          error={errors?.vehicleDetails?.message}
        >
          <TextArea
            id="vehicleDetails"
            disabled={isCreating}
            defaultValue={null}
            {...register("vehicleDetails")}
          />
        </FormRow>
      </FormRowVertical>

      {/* Weapons details */}
      <FormRowVertical
        type="report"
        label="Are there any weapons involved in the incident you are reporting. If yes, please give as much details as you know about the weapons involved."
      >
        <FormRow
          label="Weapons details"
          error={errors?.weaponsDetails?.message}
        >
          <TextArea
            id="weaponsDetails"
            disabled={isCreating}
            defaultValue={null}
            {...register("weaponsDetails")}
          />
        </FormRow>
      </FormRowVertical>

      {/* Further Information */}
      <FormRowVertical
        type="report"
        label="Any further information? Is there anything else you would like to add that may assist the investigation of this crime?"
      >
        <FormRow
          label="Further information"
          error={errors?.furtherInformation?.message}
        >
          <TextArea
            id="furtherInformation"
            disabled={isCreating}
            defaultValue={null}
            {...register("furtherInformation")}
          />
        </FormRow>
      </FormRowVertical>

      {/* Image */}
      <FormRowVertical
        type="report"
        label="Include supporting images. Attach any relevant photos or visuals to strengthen your report and aid in the investigation"
      >
        <FormRow label="Incident image 1">
          <FileInput
            id="image1"
            accept="image/*"
            type="file"
            {...register("image1")}
          />
        </FormRow>

        <FormRow label="Incident image 2">
          <FileInput
            id="image2"
            accept="image/*"
            type="file"
            {...register("image2")}
          />
        </FormRow>

        <FormRow label="Incident image 3">
          <FileInput
            id="image3"
            accept="image/*"
            type="file"
            {...register("image3")}
          />
        </FormRow>

        <FormRow label="Incident image 4">
          <FileInput
            id="image4"
            accept="image/*"
            type="file"
            {...register("image4")}
          />
        </FormRow>

        <FormRow label="Incident image 5">
          <FileInput
            id="image5"
            accept="image/*"
            type="file"
            {...register("image5")}
          />
        </FormRow>

        <FormRow label="Incident image 6">
          <FileInput
            id="image6"
            accept="image/*"
            type="file"
            {...register("image6")}
          />
        </FormRow>

        <FormRow label="Incident image 8">
          <FileInput
            id="image8"
            accept="image/*"
            type="file"
            {...register("image8")}
          />
        </FormRow>

        <FormRow label="Incident image 9">
          <FileInput
            id="image9"
            accept="image/*"
            type="file"
            {...register("image9")}
          />
        </FormRow>

        <FormRow label="Incident image 10">
          <FileInput
            id="image10"
            accept="image/*"
            type="file"
            {...register("image10")}
          />
        </FormRow>
      </FormRowVertical>

      {/* Action Buttons */}
      <FormRowVertical>
        <FormRow>
          <Button disabled={isCreating} variation="secondary" type="reset">
            Cancel
          </Button>
          <Button disabled={isCreating}>Submit Report</Button>
        </FormRow>
      </FormRowVertical>
    </Form>
  );
}

export default CreateReportForm;
