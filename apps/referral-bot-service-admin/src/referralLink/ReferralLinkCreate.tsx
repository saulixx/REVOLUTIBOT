import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ReferralLinkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="link" source="link" />
        <TextInput label="referralLink" source="referralLink" />
        <NumberInput step={1} label="referrerId" source="referrerId" />
        <NumberInput step={1} label="user_id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
