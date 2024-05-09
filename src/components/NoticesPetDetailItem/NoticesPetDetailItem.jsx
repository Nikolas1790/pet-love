import { DetailTitle, DetailValues } from "./NoticesPetDetailItem.styled";

export default function PetDetailItem({ label, value }) {
  return (
    <li>
      <DetailTitle>{label}</DetailTitle>
      <DetailValues>{value}</DetailValues>
    </li>
  );
}