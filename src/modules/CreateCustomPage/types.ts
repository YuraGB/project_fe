import { type FormListFieldData, type FormListOperation } from "antd";

export type TFields = {
  fields: FormListFieldData[];
  add: FormListOperation["add"];
  remove: FormListOperation["remove"];
};

export type TWidgetSelectProps = {
  name: string[];
  selectedWidget?: string;
  remove: FormListOperation["remove"];
  field: FormListFieldData;
};

export type TWidgetSelected = {
  widgetName?: string;
  fieldName: string;
  remove: FormListOperation["remove"];
  field: FormListFieldData;
};

export type TYoutubeWidgetCreate = {
  name: string;
};
