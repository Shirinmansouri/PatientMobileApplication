export default {
     async fetchPatientRecords(id){
    try {
      const response = await fetch(
        'http://127.0.0.1:5000/patients_tests/' + id
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  },

  async fetchPatientbyId(id){
    try {
      const response = await fetch(
        'http://127.0.0.1:5000/patients/' + id
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  }
};