"use client";
import Button from "@/components/Button";
import SearchableSelect from "@/components/Inputs/SearchableSelect";
import TextInput from "@/components/Inputs/TextInput";
import { useFormik } from "formik";
import React, { ReactNode, useCallback, useEffect } from "react";
import SingleColleagueItem from "./SingleColleagueItem";
import { generateUUID, hasEmptyValues } from "@/utils/helperFns";
import RadioGroup from "@/components/RadioGroup";
import { GeneralRadioOptions } from "@/constants/general";
import SingleGroupItem, { SingleGroupType } from "./SingleGroupItem";
import DatePicker from "@/components/Inputs/DatePicker";
import ImageUpload from "@/components/ImageUpload";
import { useClassificationOptions } from "@/app/api/hooks/useClassificationOptions";
import { useDepartmentOptions } from "@/app/api/hooks/useDepartmentOptions";

const NewDocumentForm = () => {
  const { classificationOptions, loading } = useClassificationOptions();
  const { departmentOptions, loading: deptLoading } = useDepartmentOptions();

  const { values, errors, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      department: "",
      subFolder: "",
      documentId: "",
      documentTitle: "",
      classification: "",
      version: "",
      drafters: [{ id: generateUUID(), function: "", colleague: "" }],
      assessors: [{ id: generateUUID(), function: "", colleague: "" }],
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
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setFieldValue("drafters", [
      ...values.drafters,
      { id: generateUUID(), function: "", colleague: "" },
    ]);
  };

  const onAddNewAssessor = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setFieldValue("assessors", [
      ...values.assessors,
      { id: generateUUID(), function: "", colleague: "" },
    ]);
  };

  const onAddNewGroupItem = useCallback(
    (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e?.preventDefault();
      setFieldValue("groupMembers", [
        ...values.groupMembers,
        { id: generateUUID(), department: "", subfolder: "" },
      ]);
    },
    [setFieldValue, values.groupMembers],
  );

  useEffect(() => {
    if (values.copyToNewGroup === "yes" && values.groupMembers.length === 0) {
      onAddNewGroupItem();
    }
  }, [values.copyToNewGroup, onAddNewGroupItem, values.groupMembers.length]);

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <section className="flex w-full flex-col gap-[30px] rounded-[10px] bg-light-common-white h-max p-[30px] dark:bg-dark-gray">
        <Container className="grid lg:grid-cols-2 xl:grid-cols-3 3xl:grid-auto-rows gap-3 lg:gap-30">
          <SearchableSelect
            options={departmentOptions}
            onChange={(value) => setFieldValue("department", value?.value)}
            placeholder="Select Department"
            isLoading={deptLoading}
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
            options={classificationOptions}
            onChange={(value) => setFieldValue("classification", value?.value)}
            placeholder="Select Classification"
            isSearchable={true}
            isLoading={loading}
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
                  values?.drafters[values?.drafters.length - 1],
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
                  key={drafter?.id}
                  drafter={drafter}
                  count={values.drafters.length}
                  handleFunctionChange={(value) =>
                    setFieldValue(`drafters[${index}].function`, value?.value)
                  }
                  handleColleagueChange={(value) =>
                    setFieldValue(`drafters[${index}].colleague`, value?.value)
                  }
                  handleRemoveItem={() => {
                    const newValues = values?.drafters?.filter(
                      (item) => item.id !== drafter.id,
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
                  values?.assessors[values?.assessors.length - 1],
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
                  key={assessor.id}
                  drafter={assessor}
                  count={values.assessors.length}
                  handleFunctionChange={(value) =>
                    setFieldValue(`assessors[${index}].function`, value?.value)
                  }
                  handleColleagueChange={(value) =>
                    setFieldValue(`assessors[${index}].colleague`, value?.value)
                  }
                  handleRemoveItem={() => {
                    const newValues = values?.assessors?.filter(
                      (item) => item.id !== assessor.id,
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
                <div className="flex flex-col xl:flex-row gap-2 justify-between">
                  <div className="w-9/12">
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
                  </div>
                  {values.copyToNewGroup === "yes" && (
                    <Button
                      disabled={hasEmptyValues(
                        values?.groupMembers[values?.groupMembers.length - 1],
                      )}
                      onClick={onAddNewGroupItem}
                      leftIcon="add-square"
                      className="w-max"
                    >
                      Add
                    </Button>
                  )}
                </div>
                {values.copyToNewGroup === "yes" ? (
                  <div className="flex w-full gap-4 flex-col">
                    {values.groupMembers.map(
                      (groupMember: SingleGroupType, index) => (
                        <SingleGroupItem
                          index={index}
                          key={groupMember?.id}
                          group={groupMember}
                          count={values.groupMembers.length}
                          handleFunctionChange={(value) =>
                            setFieldValue(
                              `groupMembers[${index}].department`,
                              value?.value,
                            )
                          }
                          handleColleagueChange={(value) =>
                            setFieldValue(
                              `groupMembers[${index}].subfolder`,
                              value?.value,
                            )
                          }
                          handleRemoveItem={() => {
                            const newValues = values?.groupMembers?.filter(
                              (item: SingleGroupType) =>
                                item.id !== groupMember.id,
                            );
                            setFieldValue("groupMembers", [...newValues]);
                          }}
                        />
                      ),
                    )}
                  </div>
                ) : null}
              </div>
              <div className="w-9/12">
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
          <Button
            variant="purple"
            className="w-full md:w-[250px]"
            type="submit"
          >
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
    <div
      className={`flex flex-col lg:flex-row gap-2 items-start justify-between ${className}`}
    >
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
