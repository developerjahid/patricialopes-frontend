// See https://tailwindcss.com/docs/configuration for details
module.exports = {
    purge: ['./src/**/*.js'],
    theme: {
        extend: {
            spacing: {
                '105': '28rem',
            },
        },
    },
    variants: {},
    // https://github.com/tailwindcss/custom-forms
    plugins: [require('@tailwindcss/custom-forms')],
}
