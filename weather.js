const apiKey = "3540ed5323b3e51df96ad6cf38f42cba";
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temperature");
const cityName = document.getElementById("city-name");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const humidityIcon = document.getElementById("humidity-icon");
const windIcon = document.getElementById("wind-icon");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    const weatherData = data.weather[0];
                    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.icon}.png`;
                    weatherIcon.src = iconUrl;
                    temperature.textContent = `${Math.round(data.main.temp - 273.15)} °C`;
                    cityName.textContent = data.name;
                    humidity.textContent = `${data.main.humidity}%`;
                    wind.textContent = `${data.wind.speed} km/h`;
                    humidityIcon.src = "https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png"; // Provide the correct path to your humidity icon
                    windIcon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAclBMVEX////u7u7v7+/t7e0AAADs7Ozp6enr6+vq6ur8/Pzy8vL39/fAwMDi4uLm5uZERESnp6cVFRUcHBxWVlZhYWFNTU2bm5vc3NyOjo7MzMyhoaElJSWvr6+4uLjW1tYzMzN5eXltbW09PT0NDQ2GhoYsLCwDpmwhAAAO+0lEQVR4nO1di3qjKhAWWEUhsWnuSZM06eX9X/FwERlAjfHStDmZ7bfbzR91fsFhGIYxQlZwzCIohOASIsSBWGwhlDgQpxbCaQahLMUWo9w5LEG4nx5CoieZ/yMZhBKXTAIuNi4ZgryTxASAsXcSZMHcJZOC09eTQalLJu+vxwAtgxpaBvtkABS0TG89UISN1JykgKpOog8LuxkyUGXLGKiim/XRQ0qUAMmxe/4kNYj4xYFwDg6bumQglLtkHMglM+2vRxJlUFgS01JyDiGeWyROGISinMYWwg5EUwul1LkatheLae5A3fRwblzx8BaNTfwuQmwX8R9egkw/QNR7eGMLxd7DSy1EKozI7Xp4ZDqOEbjerAKLi+rNOx5krPLIpKWlI/VmlVSYVWKg0KyWUK1ZJRXmvYseHhkKDF3DGFFvVm8bI8DFhtDDJ3MfV2Qgl+hJ5knmDmSQlT9vABpNooXua5pr9fDIDD9o3rGbJYRo3uLfwI0AkNcycYGJf1KXDKUWotQlk1oo9lqmmx6eowmnB9R18EA3FrffOSwFBoA4jmbmtowDYQChdAg9otSI8K8rXO8CC11v+X0Npf4UIE1LyJ8CQMibApRQNz2kjDo5w+HDi0ednNlGIxUnMeam4iTW5g4U0OithxMD6DpGDBzQ6KzHyKGm0Kw2tMwvj5s9VBDwSea3krnnM/NI1izweAn0eP07gurHmXZk6seZrnr0Ds9WdTPU1QNAfT2AFEjgE1GD0NAnshL6ZvaMgW9mocA366tHGnEojGArxIG4AzEHigGEXAhhiLkXg1g8hB4OTzGPiImcm4gJhphieHcVQOF8RkOV85kCiivnM+XFhtDDI/NQAY3HigH0NKu/KjrzUN3sSeZJ5hmevaKHRyaF/uOvWDm7RQ+PTMe5SLs1zYZuVr+meYseHhmwytuUkJCG3ax0hiu6WQH5LeNkPwyhh0dGhhyL9IGqaGQJed0sBVkH7RMSAJR63aybHo0ZGiD9Ie+WoTF1FXHSMNpnaLTUI4GTs3CGZyOm4QyvNjybQqh+chZ0VQt10UNNzoCh6/bwNmY13RLQ6K3HtXyz62YV/Ui+WSs9flMmYE89xibzUEHAJ5knmZDMD4Rni+VlLMwSrbNm44Rn23q8gfte6/GmMWOcMyGYhP5dL8+7IKMaqiEsimrDosVPfTdDXjeLOcPTzWkzFZRwVXi2qx7qYiiKjVBKPScxlcmiGorT1IFwQkuI+k5iAckzuk5ixHazr8X798die9h4PqJKWu2uh5KIWeHMF94PcjGe7bYv/4ws1qeMVx/W8WLMbU94V2Pqu97io/KGew+vheKKu6qghLO1pSJldeS4OF9D696ih0emob/DnJLbzKr8QzJ+/vznyvc+0n39pueuQQ+fTLu5d+hXNVoi8Yejc0Hh/WX18a1//dxHWLrEN1nEBj08MiMt4REcfWn9Xw5y8QLN3vR/d1FxmwfxvD0yI43eJDso7d8O5ZW2mk3GCf1bQUDC86V6SI7gUntF75wx9rfIYD57FYq/7sHpoki1zdsui6syo34tGcLyi2oF92LTpW6aK17EEGSGnCXyybvU23MHoqM0aqsplzZikNmqR6ZzeLaEKkwzZnvJ5RIh92JspZ6jTF6yPjwbbPWq18MjM0ZkhTCs7PIxcv0qlm3lMLqNKiKasJv5nvfo4dnGmBdjigxj3mpzNJlre9YUe1N68N3X5XKeJVf08MiME41kx0/ZAl40EvGTIsNJY1Q0JdFupcz4/H3drAcMz1ZlrRqoKmvVQEGcuITKODGZyFbJYFBaKMKkXbjopszBxTw9jCMk+WDXiAA9/PDsT0fwIZnalQTjKxTukHsxq8cw4dke+WZUkdFdpXaNZzZXLN7eXvU8qE4PNEwMoNuqlyCzeVMGQGF1q2+bhaJyPhz1zO57Uq2HR+YH1iOhMyy62W5u/YK6ddGD/M7rQTRftlsplwE+9D+YCtzkisjozF6OM1+GTGU301b9K2JEfHiULflyqtbjjmSIfGakc/Z9aCSje1nO5eeMSxdvPvttZIT3SbPdO7jRTWReolRmyZNo/U+5DL+MjHRyMtWDllkjGS7dugnHch4dR8f2ZAJXBBXXFv+Ey2+4DB4GBsAeFgYjsLKNCDP9aM/NfM0xdECPDOcskyZLk/n0yUD960yz3MIdJ6SUxLNmSZn6R/yVYgBR3zRTGWwWlBjOjmpasDCXtKY56CFI37mY6vnc2iXTcuVMB9lUzqQfYeMGkb+4zkdWD0XYhO14osf1z52BcjOokcATEd0dy5vAsmsGoLyLcezlV2b5FApco05aQ3kVdJqsi2CT7TKp9avE8+TeAr1pXnjZoWlOpd5GrG8mvo1BMmrGj4sXKCsoL/XQ6jr0bTyts0nezSKKi2mEmDJgloGc2ExOIsTn9KQGzQsExVcBAbcb6JxkKn/4pLzkWDL/4kxnK1O221+T9ZeOVk0y8f2UVuVGe2QoNr5rtvejqUPL4hDr/GVEst3L9e9rOXNGjC/fNt8M6yFtNJkvZxuZpq0NT3Rpe9wyh1552/As45PLEsoCyrIeWlyHzuvZLsl4OUzi1mQuSQQC560DGiRYCRlO5ANfmFWilsv4ps0D+nk5MVmI5/a4mRgMvSU8YVKUKuJv4p6ElpC0iA4kP8EGcs0No6gYWyjOpjtHJlD0R6eNetw7RjQrJlbKmldHNA1UGWvWUJ1/J1w436zKS+tKMn45mW4RTd9JTPR1q/e+lNDNe1/0tYK6M3YojIO42c1kcDBLhLs7mLfuCiH3/AxggUtkBj4UOKuxiT+EetwWBDQCToJ3x8kRitOnm6DJFUg8Cljul6mI8FToEXVcbIIn4du3+fwVytyR13rsGvT2vvo6nDgfI3BevV+sleHsIavtJmujR0Gmdt+aR6Z6L/9pdDdtdWyjhyLTUFPATgGE9Yz9KgvFFIO39jY6y/wQFea9Wg8D+dUeYgQI2MlZuF8spoVx5OiwXs+g7NdQ2kIzB9rLT74+DJtJhGrqcMSwDoc34zV1OJRcDWjI3km8cPWggmfaY37XS2h1ehRQ/+xZwmJ/bSWNrQQxACv+wwsga1bZl5ptXIQX3azHLdmz9eFZTL07wrH2uJSr5kHIQmJa5JCBsZTYPrxMLVq8TzJyRY8hKjXI0IjQ2JmuQnE3jELEXcWsdUWYXnhmbLBu1kiGoOy035YP79YR57l2ocNhR7Tf2EQmmsiOtjpxPD4ZBSbLbkb343w0ateTyWQU9vOQ/QQZGbQ6vXUeQ9b4GplILa6vo+HIND14CG+6xwRet7ggo7ssCV0RJr93zhm5oscw2bOErzuT+feml7t0KjDR0WbP45VfW2y4gkbZ2ODWwMwQiFRuoJRBzDyAJnqp+JJrMjrSjsNupsisTqxyttqqFidyKzXcUJ3UTfx0oMyD1DLEfGJbBquKRH45L/mtl5NaVOpSJVVHNCko5Zq6Dh4FJWUpdWt2gcOoW86Lpy6kl/HXXMzmpXNAxASTyZRRr35tQSaJb9IDp6BIreukDFDR109ISFO2Uc82lnkY8hKHxVmH/p2EhKKb9dPDIzNYrWVeHEwxTqQjucqZXrCSi6zvirAt5kEIU2SWm356+GRAtKBPFezJeq8VEwMUkwPi+1ST4V9S60lJprBSmW4+86x01MMjM9B+MTnA6jSSmDAsyXwIMsoS7eXi30WTsTZKL72Wa2JjBjT8k1xNa5SJZDqVQvSgjcwTWdKim03kbOwtEe6a3pYorS3mWHbFt2NPPWrJ9MrRXJfZCoRGM3nTv8SEQHre2kH+lG0gq8YRfSntzSymPfUYh4zKivuQRiuNiPLpDkz4VWqMUIuZEmNU5ppj5ZCryfO2rx7jkIlUOOdFssmVni8bTvQzE+UvRSvIAU9uccKcLvV3fimZg3Ji5pdtEdeZiSkxKVwR1Qf/LadiGif9AZbpROFPsL4/VN0ZK732ArjBqUvOielmBvs4UhVsTo86oLEEo+1A1myoXRr5AnBZ7DgBHu+0WMBcbSe7yaz4orMiPswuDbNAi2r2rVQvjFaV80rOZjI3v5w4ctZndOKYI++QS1c9PDLgDQLhjiL43gHnsBz4luXOJnY4y2f/9TybcpTKjUhJmde88afgCye/r6sekeOwuxW2MES8EEwDZA7j6WlyPE7EjQ0gNp19wGZZbyLnYt30YDDdRHjlDk8qI30FlHpBwMRC/n4xE+lTlc4cKMvj4jDOT2tD52N74mrfWnnGDnp4seaugYTKfDPt1gYVsEC+GefJ5ihjUSc9S/uBl+n02kFLGjYlYCI3nep5WaTJDLKD1srAe5tJ+FKPkosYC0fd2/yz2bOV1Rr76HFPMs96AP9XMlUbeWpPAg4buFxrZz3GqTszwr61Nnq0Ds/etcRx64pAMDxbVyMJN9VqGqicF4S66KHCs7mSRP6p2C+Wy08ThTsQLj/Pq/aLyZ9cQcG+NXuxICraQw8tDmQUSdTfFYoYqEKREqpUJKlVxFxsCD08MvfpIle3NrbUwyNzp/rkAxkRj8zdzOoo1RqBoes04A31GstOevhk7uOK/KF6AE8yTzLuSe72toVRSrWMUkSngIYpK3ZbePb25v2l3QzE9sJ6/CBK53UzCLm+WUMADzsXG0IP740NMBKKWUuIDxBarQnx3qYHzNAIiqQlAKookmayMCrKeQ0UfL9JD0rHeMsJhMJs8RuWRW7QQ0/OgOUczBK1MKuDW0Qpj/pmoMeKmz3JPMn8RTK9kol6knl0a2bse9eC7X0S8G7Wo/d7zn7Xm05B+ma3KlqNLzkYJGm1rR6J93bgJDaptdK/djJ8Hch9K28e21zdTmm80s8fQA+Hp3xfsmnQcKXYFggL3tsMaod1SLCWFwve29xFD4/M8G/UbpX63vDKlud7zoo7Agzdn3/N0UMFNJ5knmR+ggyy8ucNwGOZ5sEHzXuGZ82OdFmfzXcjAOS7Mxbyt7/Hdvu7786k4LDAnemih+doUlRWGBBt6Dh4KYCo6+AlyFYf6FSYQD4YA+hhX3Vc43oXUJXrbaDwVccdSkZMwcU66KFfdfxQkzNr58ht01WwGuSR6RjQ6K3H/yqgUUJ3zTf7FXGzhwoC/jSZ/wA58KxGhsg6kAAAAABJRU5ErkJggg=="; // Provide the correct path to your wind icon
                } else {
                    alert('City not found. Please enter a valid city name.');
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('An error occurred while fetching weather data. Please try again later.');
            });
    } else {
        alert('Please enter a city name.');
    }
});
