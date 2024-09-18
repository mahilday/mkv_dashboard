"use client";
import Button from "@/components/Button";
import SearchableSelect from "@/components/Inputs/SearchableSelect";
import TextInput from "@/components/Inputs/TextInput";
import { useFormik } from "formik";
import React, { ReactNode, useCallback, useEffect } from "react";
import SingleColleagueItem from "./SingleColleagueItem";
import { hasEmptyValues } from "@/utils/helperFns";
import RadioGroup from "@/components/RadioGroup";
import { GeneralRadioOptions } from "@/constants/general";
import SingleGroupItem from "./SingleGroupItem";
import DatePicker from "@/components/Inputs/DatePicker";
import ImageUpload from "@/components/ImageUpload";

const NewDocumentForm = () => {
  const { values, errors, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      department: "",
      subFolder: "",
      documentId: "",
      documentTitle: "",
      classification: "",
      version: "",
      drafters: [{ function: "", colleague: "" }],
      assessors: [{ function: "", colleague: "" }],
      copyToNewGroup: "",
      groupMembers: [],
      isRuleOfLife: "",
      isCustomRevisionDate: "",
      revisionDate: "",
      isBrochure: "",
    },
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  const onAddNewDrafter = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setFieldValue("drafters", [
      ...values.drafters,
      { function: "", colleague: "" },
    ]);
  };
  const onAddNewAssessor = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setFieldValue("assessors", [
      ...values.assessors,
      { function: "", colleague: "" },
    ]);
  };
  const onAddNewGroupItem = useCallback(
    (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e?.preventDefault();
      setFieldValue("groupMembers", [
        ...values.groupMembers,
        { department: "", subfolder: "" },
      ]);
    },
    [setFieldValue, values.groupMembers]
  );

  useEffect(() => {
    if (values.copyToNewGroup === "yes" && values.groupMembers.length === 0) {
      onAddNewGroupItem();
    }
  }, [values.copyToNewGroup]);

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <section className="flex w-full flex-col gap-[30px] rounded-[10px] bg-light-common-white h-max p-[30px] dark:bg-dark-gray">
        <Container className="grid lg:grid-cols-2 xl:grid-cols-3 3xl:grid-auto-rows gap-3 lg:gap-30">
          <SearchableSelect
            options={[
              { label: "HR", value: "HR" },
              { label: "IT", value: "IT" },
            ]}
            onChange={(value) => setFieldValue("department", value?.value)}
            placeholder="Select Department"
            isSearchable={true}
            label="Department"
            required
            className=""
          />
          <SearchableSelect
            options={[
              { label: "2023", value: "2023" },
              { label: "2024", value: "2024" },
            ]}
            onChange={(value) => setFieldValue("subFolder", value?.value)}
            placeholder="Select Subfolder"
            isSearchable={true}
            label="Subfolder"
            required
            className=""
          />
          <TextInput
            name="documentId"
            value={values.documentId}
            onChange={(e) => setFieldValue("documentId", e.target.value)}
            placeholder="Enter Document ID"
            label="Document ID"
            className=""
          />
          <TextInput
            name="documentTitle"
            value={values.documentTitle}
            onChange={(e) => setFieldValue("documentTitle", e.target.value)}
            placeholder="Enter Document Title"
            label="Document Title"
            className=""
            required
          />
          <SearchableSelect
            options={[
              { label: "Confidential", value: "Confidential" },
              { label: "Public", value: "Public" },
            ]}
            onChange={(value) => setFieldValue("classification", value?.value)}
            placeholder="Select Classification"
            isSearchable={true}
            label="Classification"
            required
            className=""
          />
          <TextInput
            name="version"
            value={values.version}
            onChange={(e) => setFieldValue("version", e.target.value)}
            placeholder="Version"
            label="Enter Version"
            className=""
          />
        </Container>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-30 w-full items-start">
          {/* Drafter Section */}
          <Container className="w-full lg:w-6/12 flex flex-col gap-4">
            <SubHeaderContent
              title="Drafter"
              subTitle="This is the person who will write the documents"
            >
              <Button
                disabled={hasEmptyValues(
                  values?.drafters[values?.drafters.length - 1]
                )}
                onClick={onAddNewDrafter}
                leftIcon="add-square"
              >
                Add
              </Button>
            </SubHeaderContent>

            <div className="flex w-full gap-4 flex-col">
              {values.drafters.map((drafter, index) => (
                <SingleColleagueItem
                  index={index}
                  key={index}
                  drafter={drafter}
                  count={values.drafters.length}
                  setFieldValue={setFieldValue}
                  handleRemoveItem={(_, deleteIndex) => {
                    const newValues = values?.drafters?.filter(
                      (_, index) => index !== deleteIndex
                    );
                    setFieldValue("drafters", newValues);
                  }}
                />
              ))}
            </div>
          </Container>

          <Container className="w-full lg:w-6/12">
            <SubHeaderContent
              title="Assessor"
              subTitle="Who should review the documents, fill in the order of precedence. The last one is the final judge"
            >
              <Button
                disabled={hasEmptyValues(
                  values?.assessors[values?.assessors.length - 1]
                )}
                onClick={onAddNewAssessor}
                leftIcon="add-square"
              >
                Add
              </Button>
            </SubHeaderContent>
            <div className="flex w-full gap-4 flex-col">
              {values.assessors.map((assessor, index) => (
                <SingleColleagueItem
                  index={index}
                  key={index}
                  drafter={assessor}
                  count={values.assessors.length}
                  setFieldValue={setFieldValue}
                  handleRemoveItem={(_, deleteIndex) => {
                    const newValues = values?.assessors?.filter(
                      (_, index) => index !== deleteIndex
                    );
                    setFieldValue("assessors", newValues);
                  }}
                />
              ))}
            </div>
          </Container>
        </div>
        <Container className="flex flex-col gap-30 w-full">
          <div className="flex flex-col xl:flex-row gap-30 w-full">
            <section className="w-full xl:w-6/12 flex flex-col gap-10">
              <div className="flex flex-col gap-10">
                <div className="flex justify-between">
                  <RadioGroup
                    options={GeneralRadioOptions}
                    name="copyToNewGroup"
                    label="Do you want to copy this item to the new group?"
                    required
                    selectedValue={values.copyToNewGroup}
                    onChange={(value) => {
                      setFieldValue("copyToNewGroup", value);
                    }}
                  />
                  <Button
                    disabled={hasEmptyValues(
                      values?.groupMembers[values?.groupMembers.length - 1]
                    )}
                    onClick={onAddNewGroupItem}
                    leftIcon="add-square"
                  >
                    Add
                  </Button>
                </div>
                {values.copyToNewGroup === "yes" ? (
                  <div className="flex w-full gap-4 flex-col">
                    {values.groupMembers.map((groupMember, index) => (
                      <SingleGroupItem
                        index={index}
                        key={index}
                        group={groupMember}
                        count={values.groupMembers.length}
                        setFieldValue={setFieldValue}
                        handleRemoveItem={(_, deleteIndex) => {
                          const newValues = values?.groupMembers?.filter(
                            (_, index) => index !== deleteIndex
                          );
                          setFieldValue("groupMembers", newValues);
                        }}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
              <div>
                <RadioGroup
                  options={GeneralRadioOptions}
                  name="isRuleOfLife"
                  label="Should this become a rule of life?"
                  required
                  selectedValue={values.isRuleOfLife}
                  onChange={(value) => {
                    setFieldValue("isRuleOfLife", value);
                  }}
                />
              </div>
            </section>
            <section className="w-full xl:w-6/12 flex flex-col gap-10">
              <div>
                <RadioGroup
                  options={GeneralRadioOptions}
                  name="isCustomRevisionDate"
                  label="Custom Revision date?? (Standard 3 years)"
                  required
                  selectedValue={values.isCustomRevisionDate}
                  onChange={(value) => {
                    setFieldValue("isCustomRevisionDate", value);
                  }}
                />
              </div>
              {values.isCustomRevisionDate === "yes" ? (
                <DatePicker
                  error={errors.isCustomRevisionDate}
                  handleChange={(e) => void setFieldValue("revisionDate", e)}
                  label="Enter Date"
                  required
                  value={
                    values.revisionDate
                      ? new Date(values.revisionDate)
                      : undefined
                  }
                />
              ) : null}

              <div>
                <RadioGroup
                  options={GeneralRadioOptions}
                  name="isBrochure"
                  label="Should this item become a brochure?"
                  required
                  selectedValue={values.isBrochure}
                  onChange={(value) => {
                    setFieldValue("isBrochure", value);
                  }}
                />
              </div>
            </section>
          </div>
          <ImageUpload label="Upload Document" labelClassName="" required />
        </Container>
        <div className="flex justify-end w-full">
          <Button variant="purple" className="w-[250px]" type="submit">
            Submit
          </Button>
        </div>
      </section>
    </form>
  );
};

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`p-4 xl:p-[30px] border border-light-primary-300 rounded-[10px] ${className}`}
    >
      {children}
    </div>
  );
};

const SubHeaderContent = ({
  title,
  subTitle,
  children,
  className,
}: {
  title: string;
  subTitle: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex items-start justify-between ${className}`}>
      <div className="flex flex-col gap-3">
        <h4 className="font-bold text-light-gray dark:text-dark-common-light">
          {title}
        </h4>
        <p className=" text-light-common-text dark:text-dark-common-light">
          {subTitle}
        </p>
      </div>
      {children}
    </div>
  );
};

export default NewDocumentForm;
