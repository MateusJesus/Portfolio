import styled from "styled-components";
import { motion } from "framer-motion";

const TextInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
    flex-direction: column;
    label {
      font-weight: 300;
      font-size: 15px;
      margin-bottom: 0.4em;
    }

    input,
    textarea {
      font-family: var(--ff);
      overflow-x: hidden;
      color: var(--text-color);
      border-radius: 10px;
      resize: none;
      max-height: 100px;
      min-height: 1.3em;
      padding: 0.5em;
      background-color: transparent;
      border: 1px solid var(--text-color);
      outline: none;
    }

    textarea{
      height: 68px;
    }

    textarea::placeholder,
    input::placeholder {
      color: #ffffff;
      opacity: 0.20;
      font-weight: 200;
    }

    input:focus,
    textarea:focus {
      border: 1px solid var(--dest);
    }

    textarea::-webkit-scrollbar {
      width: 5px;
    }

    textarea::-webkit-scrollbar-thumb {
      background-color: var(--dest);
      border-radius: 4px;
    }

    textarea::-webkit-scrollbar-thumb:hover {
      cursor: pointer;
    }

    textarea::-webkit-scrollbar-track {
      background: transparent;
    }
  }
`;

export default function TextInput({
  label,
  type,
  idInput,
  textArea,
  placeholder,
  maxLength,
  required,
  onChange,
  value,
}) {
  return (
    <TextInputStyled>
      {" "}
      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <label htmlFor={idInput}>{label}</label>
        {textArea ? (
          <textarea
            required
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            placeholder={placeholder}
            type={type}
            name={idInput}
            id={idInput}
          />
        ) : (
          <input
            required
            onChange={onChange}
            maxLength={maxLength}
            placeholder={placeholder}
            type={type}
            name={idInput}
            value={value}
            id={idInput}
          />
        )}
      </motion.div>
    </TextInputStyled>
  );
}
