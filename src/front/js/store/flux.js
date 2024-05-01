const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			signupSuccesful:null, 
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			authentication:false, 
			messageError: null,
			doctors: [],
			specialities: [],
			patients: [],
			currentPatient: null

		},
		actions: {

			login: (email, password, userType) => {
			// 	const requestOptions = {
			// 	  method: "POST",
			// 	  headers: { "Content-Type": "application/json" },
			// 	  body: JSON.stringify({
			// 		"email": email,
			// 		"password": password
			// 	  })
			// 	};
				
			// 	fetch(process.env.BACKEND_URL + `/api/login/${userType}`, requestOptions)
			// 	.then((response) => {
			// 	  console.log(response.status)
			// 	  if (response.status === 200){
			// 		setStore({ authentication: true });
			// 	  }
			// 	  return response.json();
			// 	})
			// 	.then((data) => {
			// 	  localStorage.setItem("token", data.token);
			// 	  sessionStorage.setItem("token", data.token);
			// 	  localStorage.setItem("authentication", true);
			// 	  sessionStorage.setItem("authentication", true);
			  
			// 	  if (userType === 'patient') {
			// 		localStorage.setItem("id", data.patient.id);
			// 		sessionStorage.setItem("id", data.patient.id);
			// 		localStorage.setItem("name", data.patient.name);
			// 		sessionStorage.setItem("name", data.patient.name);
			// 	  } else if (userType === 'doctor') {
			// 		localStorage.setItem("id", data.doctor.id);
			// 		sessionStorage.setItem("id", data.doctor.id);
			// 		localStorage.setItem("name", data.doctor.name);
			// 		sessionStorage.setItem("name", data.doctor.name);
			// 	  }
				  
			// 	  localStorage.setItem("userType", userType); // Añade esta línea para guardar el tipo de usuario
			// 	  console.log("UserType stored in localStorage:", localStorage.getItem("userType")); // Verifica si se almacenó correctamente

			// 	  console.log("DATA LOGIN ->", data);
			// 	})
			// 	.catch((error) => {
			// 	  console.error( error);
			// 	  setStore({ messageError: error.message });
			// 	});
			//   },

                const requestOptions = {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    "email": email,
                    "password": password
                  })
                };
                fetch(process.env.BACKEND_URL + `/api/login/${userType}`, requestOptions)
                .then((response) => {
                  console.log(response.status)
                  if (response.status === 200){
                    setStore({ authentication: true });
                  }
                  return response.json();
                })
                .then((data) => {
                  localStorage.setItem("token", data.token);
                  sessionStorage.setItem("token", data.token);
                  localStorage.setItem("authentication", true);
                  sessionStorage.setItem("authentication", true);
                  if (userType === 'patient') {
                    localStorage.setItem("id", data.patient.id);
                    sessionStorage.setItem("id", data.patient.id);
                    localStorage.setItem("name", data.patient.name);
                    sessionStorage.setItem("name", data.patient.name);
                  } else if (userType === 'doctor') {
                    localStorage.setItem("id", data.doctor.id);
                    sessionStorage.setItem("id", data.doctor.id);
                    localStorage.setItem("name", data.doctor.name);
                    sessionStorage.setItem("name", data.doctor.name);
                  }
                  localStorage.setItem("userType", userType); // Añade esta línea para guardar el tipo de usuario
                  console.log("UserType stored in localStorage:", localStorage.getItem("userType")); // Verifica si se almacenó correctamente
                  console.log("DATA LOGIN ->", data);
                })
                .catch((error) => {
                  console.error( error);
                  setStore({ messageError: error.message });
                });
              },


			  
			register: async (userData, userType, id) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + `/api/register/${userType}`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(userData)
					});
					if (!resp.ok) {
						
						throw new Error("There was a problem in the registration request");
					}
					const data = await resp.json();
					setStore({ signupSuccesful: "Successful registration! Now you can log in." });
					
				} catch (error) {
					setStore({ messageError: error.message });
				}
			},

			

			logout: ()=>{
				setStore({ authentication: false });
			        // Eliminar el token del almacenamiento local
				localStorage.removeItem('token');
				localStorage.removeItem('name');
				localStorage.removeItem('authentication');
				localStorage.removeItem('id');
				sessionStorage.removeItem('id');
				sessionStorage.removeItem('authentication');
				sessionStorage.removeItem('token');
				sessionStorage.removeItem('name');
					// Redireccionar al usuario a la página de inicio de sesión
				},
			
			loadDoctors: ()=>{
				fetch(process.env.BACKEND_URL + "/doctors")
					.then((response) => response.json())
					.then((data) => setStore({doctors:data.result}))
					.catch((error) => console.error(error))
				}, 

			loadSpecialities: ()=>{
				fetch(process.env.BACKEND_URL + "/specialities")
					.then((response) => response.json())
					.then((data) => {
						// console.log("fetchSpeciality FLUX",data)
						// console.log("DATARESULT FLUX", data.result)
						setStore({ specialities: data.result })})
					.catch((error) => console.error(error))
			},
	

			getinfoDoctor: (id) => { 
				console.log("id es igual a:", id)
				fetch(process.env.BACKEND_URL + `/doctor/${id}`)
				.then((response) => { console.log(response)
					return response.json()})

				.then((result) => {
				// Aquí se asume que los datos del médico obtenidos del backend están en data
					let updatedDoctor = result; // Suponiendo que los datos del médico se encuentran en data.result
					let updatedDoctors = getStore().doctors.map((Doctor) => {
						if (Doctor.id === id) {
							return updatedDoctor; // Si el ID coincide, reemplaza el médico existente con los nuevos datos
						} else {
							return Doctor; // Si el ID no coincide, conserva el médico sin cambios
						}
					});
					setStore({ doctors: updatedDoctors }); // Actualiza el estado de la tienda con los médicos actualizados
					
				});
			},

			updateDoctor: (editDoctor, id) => {
                const requestOptions = {
                    method: "PUT",
                    body: JSON.stringify(editDoctor),
                    headers: { "Content-Type": "application/json" },
                    redirect: "follow"
                };
                fetch(process.env.BACKEND_URL + `/doctor/${id}`, requestOptions)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((result) => {
                    console.log("RESULT FLUX UPGRATE", result);
                    const conStore = getStore()
                    const doctorsUpdate = conStore.doctors.map((doctor)=>{if (doctor.id === id){
                        return result.doctor
                    } return doctor})
                    setStore({ doctors: doctorsUpdate });
                })
                .catch((error) => console.error("Fetch error:", error));
            },

			updatePatient: async (editPatient, id) => {
				try {
					console.log("ID in updatePatient:", id); // Agregar este console.log
					console.log("Data to be sent:", editPatient)

					const requestOptions = {
						method: "PUT",
						body: JSON.stringify(editPatient),
						headers: { "Content-Type": "application/json" }
					};
			
					const response = await fetch(`${process.env.BACKEND_URL}/patient/${id}`, requestOptions);
					const data = await response.json();
			
					if (!response.ok) {
						throw new Error(data.message || "Failed to update patient");
					}
			
					console.log("Response data:", data);

					// Actualizar el estado global con los datos actualizados del paciente
					setStore({ currentPatient: editPatient });
			
					return data;
				} catch (error) {
					console.error("Error updating patient:", error);
					throw error;
				}
			},



			loadPatients: ()=>{
				fetch(process.env.BACKEND_URL + "/patients")
					.then((response) => response.json())
					.then((data) => setStore({patients:data.result}))
					.catch((error) => console.error(error))
				}, 
			
			
			getinfoPatient: (id) => { 

				console.log("Fetching patient info for ID:", id);

				fetch(process.env.BACKEND_URL + `/patient/${id}`)
				.then((response) => response.json())
				.then((result) => {
					console.log("Received patient info:", result);
					// Actualizar el estado global con la información del paciente que ha iniciado sesión
					setStore({ currentPatient: result.patient });
				})
				.catch((error) => {
					console.error("Error al obtener la información del paciente:", error);
					setStore({ messageError: "Error al obtener la información del paciente" });
				});
			},

			//PARA USAR EN EL PrivateMedico.js
			getinfoMedico: (id) => { 
				fetch(process.env.BACKEND_URL + `/doctor/${id}`)
				.then((response) => response.json())
				.then((result) => {
					// Actualizar el estado global con la información del paciente que ha iniciado sesión
					setStore({ currentMedico: result });
				})
				.catch((error) => {
					console.error("Error al obtener la información del paciente:", error);
					setStore({ messageError: "Error al obtener la información del paciente" });
				});
			},

			recoverPassword: (email, userType) => {
                ;
               const requestOptions = {
                 method: "POST",
                 headers: { "Content-Type": "application/json",
                               },
                 body: JSON.stringify({
                   "email": email,
                   "userType": userType
               })
               };
               fetch(process.env.BACKEND_URL + "/send_password", requestOptions)
                 .then((response) => response.text())
                 .then((result) => console.log(result))
                 .catch((error) => console.error(error));
           },

		   changePassword: (password, id) => {
			const userType = localStorage.getItem("userType")
			const requestOptions = {
				method: "PUT",
				body: JSON.stringify({ password }), // Envía los datos como un objeto
				headers: { "Content-Type": "application/json" },
			};
			console.log("URL:", process.env.BACKEND_URL + `/changepassword/${userType}/${id}`);
			console.log("NUEVA CONTRASEÑA", { password });
			fetch(process.env.BACKEND_URL + `/changepassword/${userType}/${id}`, requestOptions)
				.then((response) => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return true;
				})
				.then((result) => {
					console.log("Contraseña actualizada exitosamente");
				})
				.catch((error) => console.error("Fetch error:", error));
		},
			
			privateZone: async () => {
				try {
					const token = localStorage.getItem('token');
					
					const requestOptions = {
						method: 'GET',
						headers: { 
							"Content-Type": "application/json",
							'Authorization': 'Bearer ' + token
						} 
					};

					const resp = await fetch(process.env.BACKEND_URL + "/api/protected", requestOptions);

					if (!resp.ok) {
						throw new Error("There was a problem in the login request");
					} else if (resp.status === 403) {
						throw new Error("Missing or invalid token");
					}

					const data = await resp.json();
					console.log("This is the data you requested", data);
					return data;
				} catch (error) {
					console.error(error);
				
				}
			
		},
		
		},
	}
};


export default getState;
