
const Validate = (fields) => {
    const letterOnly = /^[a-zA-Z\s-.]*$/;
    const numOnly = /^[0-9-().+]+$/;

    if (document.querySelector("input[name='legit']").value) {
        document.querySelector("input[name='legit']").classList.add("error");
    } else {
        document.querySelector("input[name='legit']").classList.remove("error");
    }

    for (let i = 0; i < fields.length; i++) {
        let value = "";

        try {
            if (document.querySelector("[name='" + fields[i] + "']").value) {
                value = document.querySelector("[name='" + fields[i] + "']").value;
            }
        } catch (err) {
            document
                .querySelector("[name='" + fields[i] + "']")
                .classList.add("error");
        }

        const maxCharNum = document
            .querySelector("[name='" + fields[i] + "']")
            .getAttribute("maxLength");
        if (value.length <= Number(maxCharNum) && value.length > 0) {
            if (document.querySelector(".error[name='" + fields[i] + "']")) {
                document
                    .querySelector("[name='" + fields[i] + "']")
                    .classList.remove("error");
            }
        } else {
            document
                .querySelector("[name='" + fields[i] + "']")
                .classList.add("error");
        }

        if (fields[i] === "email") {
            const email = document.querySelector("[name='" + fields[i] + "']").value;
            var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
                document
                    .querySelector("[name='" + fields[i] + "']")
                    .classList.add("error");
            } //end if
        }

        if (fields[i] === "phone") {
            const phone = document.querySelector("[name='" + fields[i] + "']").value;

            if (
                phone.match(numOnly) == null ||
                phone.length > 20 ||
                phone.length < 10
            ) {
                document
                    .querySelector("[name='" + fields[i] + "']")
                    .classList.add("error");
            }
        }
    }

    if (document.querySelector("#portfolioContact button[type='submit']")) {
        if (document.querySelector(".error")) {
            document.querySelector(
                "#portfolioContact button[type='submit']"
            ).disabled = true;

            document.querySelector("#portfolioContact").setAttribute("action", "");
        } else {
            document.querySelector(
                "#portfolioContact button[type='submit']"
            ).disabled = false;
            document
                .querySelector("#portfolioContact")
                .setAttribute(
                    "action",
                    "https://mechanized-aesthetics.net/php-relays/EmailRelay.php"
                );

        }
    }
};

function onHandleChange() {
    Validate(["name", "email", "phone", "message"]);
}

document.querySelector("[name='url']").value = window.location.href;