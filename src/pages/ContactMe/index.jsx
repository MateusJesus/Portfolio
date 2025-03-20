import Modal from "../../components/Modal";
import RedirectButton from "../../components/Buttons/RedirectButton";
import { Link, useNavigate } from "react-router";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import TextInput from "../../components/Input/TextInput";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMeStyled = styled.div`
  border-radius: 20px;
  padding: 20px;
  background-color: var(--bg);
  color: var(--text-color);

  hr {
    border: none;
    border-bottom: solid 1px var(--color-hr);
    margin: 1em 0;
  }

  .textInput {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .iconsPostSent {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    .icon {
      font-size: 60px;
    }
    .success {
      color: var(--dest);
    }
    .error {
      color: red;
    }
  }

  .actions_project {
    display: flex;
    margin: 10px 0 0 0;
    justify-content: space-between;
    align-items: center;

    .redirect {
      gap: 5px;
      flex-direction: column;
      display: flex;
      align-items: end;
    }

    a {
      color: var(--dest);
      font-weight: 200;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [stopClose, setStopClose] = useState(false);
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();

    if (name === "" || email === "" || title === "" || message === "") {
      return;
    }

    setStopClose(true);
    setLoading(true);
    setStatus("");

    const template = {
      from_name: name,
      email: email,
      title: title,
      message: message,
    };

    setTimeout(() => {
      emailjs;
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          template,
          import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then(() => {
          setStatus("success");
          resetForm();
        })
        .catch(() => {
          setStatus("error");
        })
        .finally(() => {
          setLoading(false);
          setTimeout(() => {
            setStopClose(false);
            setStatus("");
            navigate(-1);
          }, 1000);
        });
    }, 100);
  }

  function resetForm() {
    setName("");
    setEmail("");
    setTitle("");
    setMessage("");
  }

  return (
    <Modal stopClose={stopClose}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ContactMeStyled>
          <div>
            {!status ? (
              loading ? (
                <motion.div
                  className="iconsPostSent"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    border: "4px solid var(--bg-tec)",
                    borderTopColor: "var(--dest)",
                    willChange: "transform",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ) : (
                <>
                  <h1 className="title">Envie um email para mim!</h1>
                  <p>
                    Vamos conversar! Estou disponível para colaborações e
                    projetos freelancer.
                  </p>
                  <hr />
                  <form className="textInput" onSubmit={submit}>
                    <TextInput
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                      placeholder="Escreva seu nome"
                      label="Nome"
                      type="text"
                      maxLength={50}
                    />
                    <TextInput
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                      placeholder="Escreva seu email"
                      label="Email"
                      type="email"
                      maxLength={50}
                    />
                    <TextInput
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                      required
                      placeholder="Escreva o título"
                      label="Título"
                      type="text"
                      maxLength={50}
                    />
                    <TextInput
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      required
                      placeholder="Escreva a mensagem"
                      label="Mensagem"
                      type="text"
                      maxLength={1000}
                      textArea
                    />
                    <div className="actions_project">
                      <Link to={-1}>Voltar</Link>
                      <RedirectButton
                        type="submit"
                        icon={<FaPaperPlane />}
                      >
                        Enviar
                      </RedirectButton>
                    </div>
                  </form>
                </>
              )
            ) : (
              <motion.div
                className="iconsPostSent"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {status === "success" ? (
                  <FaCircleCheck
                    className="icon success"
                  />
                ) : (
                  <FaCircleXmark
                    className="icon error"
                  />
                )}
              </motion.div>
            )}
          </div>
        </ContactMeStyled>
      </motion.div>
    </Modal>
  );
}
