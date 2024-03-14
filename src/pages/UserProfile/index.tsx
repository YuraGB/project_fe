import { type FC } from "react";
import RouteWithAnimation from "@/components/RouteWithAnimation/RouteWithAnimation.tsx";
import { Col, Row } from "antd";
import UpdateProfileForm from "@/modules/UpdateProfile";

const UserProfile: FC = () => {
  return (
    <RouteWithAnimation>
      <article style={{ width: "100%" }}>
        <Row>
          <Col span={24}>
            <h1>User Profile</h1>
            <UpdateProfileForm />
          </Col>
        </Row>
      </article>
    </RouteWithAnimation>
  );
};

export default UserProfile;
