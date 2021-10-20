import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { Address, SignableMessage } from "@elrondnetwork/erdjs";
import { ErrorMessage, Formik } from "formik";
import { Modal } from "react-bootstrap";
import { object, string } from "yup";

export interface SendModalType {
  show: boolean;
  handleClose: () => void;
}

const SendModal = ({ show, handleClose }: SendModalType) => {
  const {
    dapp: { provider },
    address,
  } = Dapp.useContext();

  return (
    <Modal
      show={show}
      backdrop="static"
      onHide={handleClose}
      className="modal-container"
      animation={false}
      centered
    >
      <div className="card container">
        <div className="card-body">
          <div className="px-spacer">
            <p className="h3">Message Signing</p>
            <p className="lead mb-spacer">
              Paste in the message you would like to sign
            </p>
          </div>
          <Formik
            initialValues={{ message: "" }}
            onSubmit={async ({ message }, { setSubmitting }) => {
              const msg = new SignableMessage({
                message: Buffer.from(message, "utf8"),
                address: new Address(address),
              });
              console.log(msg);
              provider.signMessage(msg).then((result) => {
                console.log(11, result.toJSON());
              });
            }}
            validationSchema={object().shape({
              message: string().required(),
            })}
          >
            {({
              submitForm,
              handleChange,
              handleBlur,
              errors,
              touched,
              values,
              isSubmitting,
            }) => {
              return (
                <div className="px-spacer text-left">
                  <fieldset disabled={isSubmitting}>
                    <div
                      className="d-flex flex-column justify-content-center"
                      style={{ minHeight: "5.87rem" }}
                    >
                      <div className="form-group mb-0">
                        <label htmlFor="message" className="pb-1">
                          Message
                        </label>
                        <textarea
                          className={`form-control ${
                            errors.message && touched.message
                              ? "is-invalid"
                              : ""
                          }`}
                          id="message"
                          name="message"
                          data-testid="message"
                          value={values.message}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          component="div"
                          name="message"
                          className="text-left invalid-feedback"
                        />
                      </div>
                    </div>

                    <div className="d-flex align-items-center flex-column mt-3">
                      <button
                        onClick={submitForm}
                        data-testid="submitButton"
                        className="btn btn-primary px-spacer"
                        disabled={isSubmitting}
                      >
                        Sign
                      </button>
                      <a
                        id="closeButton"
                        href="#"
                        className="mt-3"
                        onClick={(e) => {
                          e.preventDefault();
                          handleClose();
                        }}
                      >
                        Close
                      </a>
                    </div>
                  </fieldset>
                </div>
              );
            }}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default SendModal;
