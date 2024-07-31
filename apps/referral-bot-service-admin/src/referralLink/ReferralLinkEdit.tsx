import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ReferralLinkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="link" source="link" />
        <TextInput label="referralLink" source="referralLink" />
        <NumberInput step={1} label="referrerId" source="referrerId" />
        <NumberInput step={1} label="user_id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
