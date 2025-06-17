import { ErrorCorrectionLevel, QRCode } from "@/components/QRCode";
import { Field, Label, Select, Textarea } from "@headlessui/react";
import { useState } from "react";
import {
  fieldContainer,
  fieldListContainer,
  inputStyle,
  labelStyle,
} from "./style.css";

export function QRCodeGenerator() {
  const [data, setData] = useState("");
  const [errorCorrectionLevel, setErrorCorrectionLevel] =
    useState<ErrorCorrectionLevel>("medium");

  return (
    <div>
      <div className={fieldListContainer}>
        <Field className={fieldContainer}>
          <Label className={labelStyle}>Value</Label>
          <Textarea
            className={inputStyle}
            value={data}
            onChange={(ev) => setData(ev.target.value)}
          />
        </Field>
        <Field className={fieldContainer}>
          <Label className={labelStyle}>Error correction level</Label>
          <Select
            className={inputStyle}
            value={errorCorrectionLevel}
            onChange={(ev) =>
              setErrorCorrectionLevel(ev.target.value as ErrorCorrectionLevel)
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="quartile">Quartile</option>
            <option value="high">High</option>
          </Select>
        </Field>
      </div>
      <QRCode
        data={data}
        errorCorrectionLevel={errorCorrectionLevel}
        size={150}
      />
    </div>
  );
}
