import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UserReferralCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="referralUser" source="referralUser" />
        <TextInput label="referredUser" source="referredUser" />
      </SimpleForm>
    </Create>
  );
};
