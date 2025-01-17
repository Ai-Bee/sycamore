

export default {
  install(app) {
    app.config.globalProperties.$validateForm = (formData, rules) => {
      const errors = {};
      console.log({ formData, rules })
      Object.keys(rules).forEach((field) => {
        const fieldRules = rules[field];
        const value = formData[field];
        errors[field] = [];

        fieldRules.forEach((rule) => {
          const error = rule(value, formData);
          if (error) errors[field].push(error);
        });
      });

      return errors;
    };

    app.provide('validateForm', app.config.globalProperties.$validateForm);
  },
};
