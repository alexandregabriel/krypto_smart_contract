require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Iw_2u9osJGgQaIuHon7Rpm_XloezPwmh',
      accounts: [ '4f6aa3ab1b28e8c818ebfff2788781c2b2c2bc87bb93ac93654b3358305690ad' ]
    }
  }
}