import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AdminMessageList } from "./adminMessage/AdminMessageList";
import { AdminMessageCreate } from "./adminMessage/AdminMessageCreate";
import { AdminMessageEdit } from "./adminMessage/AdminMessageEdit";
import { AdminMessageShow } from "./adminMessage/AdminMessageShow";
import { VerificationList } from "./verification/VerificationList";
import { VerificationCreate } from "./verification/VerificationCreate";
import { VerificationEdit } from "./verification/VerificationEdit";
import { VerificationShow } from "./verification/VerificationShow";
import { ReferralLinkList } from "./referralLink/ReferralLinkList";
import { ReferralLinkCreate } from "./referralLink/ReferralLinkCreate";
import { ReferralLinkEdit } from "./referralLink/ReferralLinkEdit";
import { ReferralLinkShow } from "./referralLink/ReferralLinkShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { GroupList } from "./group/GroupList";
import { GroupCreate } from "./group/GroupCreate";
import { GroupEdit } from "./group/GroupEdit";
import { GroupShow } from "./group/GroupShow";
import { ReferralUseList } from "./referralUse/ReferralUseList";
import { ReferralUseCreate } from "./referralUse/ReferralUseCreate";
import { ReferralUseEdit } from "./referralUse/ReferralUseEdit";
import { ReferralUseShow } from "./referralUse/ReferralUseShow";
import { MessageTemplateList } from "./messageTemplate/MessageTemplateList";
import { MessageTemplateCreate } from "./messageTemplate/MessageTemplateCreate";
import { MessageTemplateEdit } from "./messageTemplate/MessageTemplateEdit";
import { MessageTemplateShow } from "./messageTemplate/MessageTemplateShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { UserVerificationList } from "./userVerification/UserVerificationList";
import { UserVerificationCreate } from "./userVerification/UserVerificationCreate";
import { UserVerificationEdit } from "./userVerification/UserVerificationEdit";
import { UserVerificationShow } from "./userVerification/UserVerificationShow";
import { AdminLogList } from "./adminLog/AdminLogList";
import { AdminLogCreate } from "./adminLog/AdminLogCreate";
import { AdminLogEdit } from "./adminLog/AdminLogEdit";
import { AdminLogShow } from "./adminLog/AdminLogShow";
import { UserReferralList } from "./userReferral/UserReferralList";
import { UserReferralCreate } from "./userReferral/UserReferralCreate";
import { UserReferralEdit } from "./userReferral/UserReferralEdit";
import { UserReferralShow } from "./userReferral/UserReferralShow";
import { CardRequestList } from "./cardRequest/CardRequestList";
import { CardRequestCreate } from "./cardRequest/CardRequestCreate";
import { CardRequestEdit } from "./cardRequest/CardRequestEdit";
import { CardRequestShow } from "./cardRequest/CardRequestShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ReferralBotService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AdminMessage"
          list={AdminMessageList}
          edit={AdminMessageEdit}
          create={AdminMessageCreate}
          show={AdminMessageShow}
        />
        <Resource
          name="Verification"
          list={VerificationList}
          edit={VerificationEdit}
          create={VerificationCreate}
          show={VerificationShow}
        />
        <Resource
          name="ReferralLink"
          list={ReferralLinkList}
          edit={ReferralLinkEdit}
          create={ReferralLinkCreate}
          show={ReferralLinkShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="Group"
          list={GroupList}
          edit={GroupEdit}
          create={GroupCreate}
          show={GroupShow}
        />
        <Resource
          name="ReferralUse"
          list={ReferralUseList}
          edit={ReferralUseEdit}
          create={ReferralUseCreate}
          show={ReferralUseShow}
        />
        <Resource
          name="MessageTemplate"
          list={MessageTemplateList}
          edit={MessageTemplateEdit}
          create={MessageTemplateCreate}
          show={MessageTemplateShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="UserVerification"
          list={UserVerificationList}
          edit={UserVerificationEdit}
          create={UserVerificationCreate}
          show={UserVerificationShow}
        />
        <Resource
          name="AdminLog"
          list={AdminLogList}
          edit={AdminLogEdit}
          create={AdminLogCreate}
          show={AdminLogShow}
        />
        <Resource
          name="UserReferral"
          list={UserReferralList}
          edit={UserReferralEdit}
          create={UserReferralCreate}
          show={UserReferralShow}
        />
        <Resource
          name="CardRequest"
          list={CardRequestList}
          edit={CardRequestEdit}
          create={CardRequestCreate}
          show={CardRequestShow}
        />
      </Admin>
    </div>
  );
};

export default App;
