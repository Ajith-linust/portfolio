import * as Styles from "./styles";

export default function MobileNavBar() {
  const clickHandler = (name: string) => {
    let element = document.getElementById(name);

    if (!element) return;

    if (name === "home") {
      document.documentElement.scrollTop = 0;
      return;
    }

    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Styles.MobileNavWrapper>
      <svg
        onClick={() => clickHandler("home")}
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.2861 1.21065C12.6472 0.929784 13.1529 0.929784 13.514 1.21065L22.514 8.21065C22.7576 8.4001 22.9 8.69141 22.9 9V20C22.9 20.7957 22.584 21.5587 22.0213 22.1213C21.4587 22.6839 20.6957 23 19.9 23H5.90002C5.10437 23 4.34131 22.6839 3.7787 22.1213C3.21609 21.5587 2.90002 20.7957 2.90002 20V9C2.90002 8.69141 3.0425 8.4001 3.28608 8.21065L12.2861 1.21065ZM4.90002 9.48908V20C4.90002 20.2652 5.00538 20.5196 5.19292 20.7071C5.38045 20.8946 5.63481 21 5.90002 21H19.9C20.1652 21 20.4196 20.8946 20.6071 20.7071C20.7947 20.5196 20.9 20.2652 20.9 20V9.48908L12.9 3.26686L4.90002 9.48908Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.90002 12C8.90002 11.4477 9.34774 11 9.90002 11H15.9C16.4523 11 16.9 11.4477 16.9 12V22C16.9 22.5523 16.4523 23 15.9 23C15.3477 23 14.9 22.5523 14.9 22V13H10.9V22C10.9 22.5523 10.4523 23 9.90002 23C9.34774 23 8.90002 22.5523 8.90002 22V12Z"
        />
      </svg>
      <svg
        onClick={() => clickHandler("education")}
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
      >
        <path d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z" />
      </svg>
      <svg
        onClick={() => clickHandler("companies")}
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
      >
        <path d="M140-120q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h180v-100q0-24 18-42t42-18h200q24 0 42 18t18 42v100h180q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm240-600h200v-100H380v100Zm440 349H571v60H391v-60H140v191h680v-191Zm-369 0h60v-60h-60v60Zm-311-60h251v-60h180v60h249v-229H140v229Zm340 30Z" />
      </svg>
      <svg
        onClick={() => clickHandler("skills")}
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
      >
        <path d="M42-120v-92q0-34 16-56.5t45-36.5q54-26 115.5-43T358-365q78 0 139.5 17T613-305q29 14 45 36.5t16 56.5v92H42Zm60-60h512v-32q0-15-8.5-24.5T585-251q-43-19-96-36.5T358-305q-78 0-131 17.5T131-251q-12 5-20.5 14.5T102-212v32Zm256-245q-66 0-108-43t-42-107h-10q-8 0-14-6t-6-14q0-8 6-14t14-6h10q0-40 20-72t52-52v39q0 6 4.5 10.5T295-685q7 0 11-4.5t4-10.5v-52q8-2 22-3.5t27-1.5q13 0 27 1.5t22 3.5v52q0 6 4 10.5t11 4.5q6 0 10.5-4.5T438-700v-39q32 20 51 52t19 72h10q8 0 14 6t6 14q0 8-6 14t-14 6h-10q0 64-42 107t-108 43Zm0-60q42 0 66-25t24-65H268q0 40 24 65t66 25Zm302 124-2-29q-7-4-14.5-9T630-409l-26 14-22-32 26-19q-2-4-2-7.5v-15q0-3.5 2-7.5l-26-19 22-32 26 14 14-10q7-5 14-9l2-29h40l2 29q7 4 14 9l14 10 26-14 22 32-26 19q2 4 2 7.5v15q0 3.5-2 7.5l26 19-22 32-26-14q-6 5-13.5 10t-14.5 9l-2 29h-40Zm20-62q16 0 27-11t11-27q0-16-11-27t-27-11q-16 0-27 11t-11 27q0 16 11 27t27 11Zm88-155-9-35q-10-4-20.5-11T721-639l-44 16-20-35 35-28q-2-5-3.5-11t-1.5-12q0-6 1.5-12t3.5-11l-35-28 20-35 44 16q7-8 17.5-15.5T759-805l9-35h38l9 35q10 3 20.5 10.5T853-779l44-16 20 35-35 28q2 5 3.5 11t1.5 12q0 6-1.5 12t-3.5 11l35 28-20 35-44-16q-7 8-17.5 15T815-613l-9 35h-38Zm19-73q25 0 41.5-16.5T845-709q0-25-16.5-41.5T787-767q-25 0-41.5 16.5T729-709q0 25 16.5 41.5T787-651ZM102-180h512-512Z" />
      </svg>
    </Styles.MobileNavWrapper>
  );
}
