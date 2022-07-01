let handler = async m => m.reply(`
            .✵.════𝔻𝕆ℕ𝔸𝕊𝕀════.✵.
Dana-Gopay-Pulsa
6283897011555
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler