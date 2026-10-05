import { useContext } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { contactLinks } from '../constants';
import { ThemeContext } from '../themeProvider';

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [state, handleSubmit] = useForm('xljgdrbl');
  return (
    <div
      id="contact"
      className={
        darkMode
          ? 'bg-gray-100 pt-24'
          : 'bg-black pt-24 text-white'
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center z-0">
          Contact
        </h2>
        <div>
          <h4 className="mt-12 text-2xl sm:text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <p className="text-gray-500 text-lg sm:text-xl max-w-3xl">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I&apos;d love to hear from you.
          </p>
        </div>
        <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8">
            {state.succeeded ? (
              <p className="my-6 text-lg sm:text-xl font-medium text-blue-500">
                Thanks for reaching out! Your message was sent and I&apos;ll get
                back to you soon.
              </p>
            ) : (
            <form onSubmit={handleSubmit}>
              <div className="my-6">
                <label
                  htmlFor="name"
                  className={
                    darkMode
                      ? 'block mb-2 text-lg font-medium text-gray-900'
                      : 'block mb-2 text-lg font-medium text-white'
                  }
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={
                    darkMode
                      ? 'block mb-2 text-lg font-medium text-gray-900'
                      : 'block mb-2 text-lg font-medium text-white'
                  }
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className={
                    darkMode
                      ? 'block mb-2 text-lg font-medium text-gray-900'
                      : 'block mb-2 text-lg font-medium text-white'
                  }
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-500"
                />
              </div>
              {/* Hidden from people; bots that fill it in get filtered by Formspree. */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <ValidationError
                errors={state.errors}
                className="mb-4 text-sm text-red-500"
              />
              <div className="flex justify-between items-center gap-4">
                <div className="underline">
                  <a href="mailto:n.d.yohros@wustl.edu">
                    Send me email directly
                  </a>
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
            )}
          </div>
          <div className="w-full flex flex-col md:items-end  mt-12 md:mt-6">
            {/* <h1 className="text-3xl font-bold">Phone</h1>
            <a
              href="hello"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              +91 8285631499
            </a> */}
            <h1 className="text-3xl font-bold">Email</h1>
            <p
              href="hello"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              n.d.yohros@wustl.edu
            </p>
            <h1 className="text-3xl  font-bold">Address</h1>
            <p
              href="hello"
              className="mt-4  mb-12 md:text-right font-semibold text-blue-700 block uppercase"
            >
              North Miami Beach, FL
              <br />
              United States
            </p>
            <h1 className="text-3xl  font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el, i) => (
                <a
                  key={i}
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="" src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          darkMode
            ? 'w-full bg-white text-black text-lg py-3 flex justify-center items-center'
            : 'w-full bg-gray-900 text-white text-lg py-3 flex justify-center items-center'
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Nessim Yohros
      </div>
    </div>
  );
};

export default Contact;
