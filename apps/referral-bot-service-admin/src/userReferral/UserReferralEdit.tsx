import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UserReferralEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="referralUser" source="referralUser" />
        <TextInput label="referredUser" source="referredUser" />
      </SimpleForm>
    </Edit>
  );
};
