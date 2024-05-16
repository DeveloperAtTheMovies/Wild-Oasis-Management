import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";
import { HiOutlineUser } from "react-icons/hi2";

const StyledHeader = styled.ul`
  display: flex;
  gap: 0.4rem;
`;
export default function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkMode />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeader>
  );
}
