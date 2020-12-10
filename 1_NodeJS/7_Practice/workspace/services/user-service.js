'use strict';

const UserRepository = require('../repositories/user-repository');
const UserDto = require('./../dto/user-dto');
const Response = require('./../dto/response-dto');
const AppError = require('./../dto/appError-dto');

/**
 * User Service
 */
class UserService {
  /**
   * Constructor
   * @param {*} container
   */
  constructor(container) {
    this.UserRepository = container.get(UserRepository);
  }

  /**
   * Create a new user
   * @param {*} userDto
   * @param {*} lang
   */
  async create(userDto, lang) {
    try {
      // Delete current user (based on email)
      const { data } = await this.findOne({email: userDto.email});
      if (data && data.email !== undefined) {
        return new Response({}, null, 500, 'User Already Exist!');
      }

      // Create new user
      const { email } = await this.UserRepository.create(userDto.toJSON());

      return await this.findOne(email);
    } catch (error) {
      console.error(error.message || JSON.stringify(error));
      throw new AppError(error.message || error);
    }
  }

  /**
   * Find an user
   * @param {*} email
   */
  async findOne(email) {
    try {
      const { data } = await this.UserRepository.findOne(email);
      const userDto = this.getUserDTO(data);

      return new Response(userDto.toJSON());
    } catch (error) {
      console.error(error.message || JSON.stringify(error));
      throw new AppError(error.message);
    }
  }

  /**
   * Mapping user table data to UserDTO
   * @param {User data} user
   */
  getUserDTO(data){
    const userDto = new UserDto();
    if (data !== undefined) {
      userDto.email = data['email'];
      userDto.employeeNo = data['employeeNo'];
      userDto.age = data['age'];
      userDto.languagePreference = data['languagePreference'];
    }

    return userDto;
  }
}

module.exports = UserService;
