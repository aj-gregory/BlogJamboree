class User < ActiveRecord::Base

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  attr_accessible :username, :email, :password, :password_confirmation, :remember_me, :login
	attr_accessor :login

	has_many :posts, :foreign_key => :author_id

	def self.find_first_by_auth_conditions(conditions)
		conditions_dup = conditions.dup
		if login = conditions_dup.delete(:login)
			where(conditions_dup).where(
			  ["username = :value OR lower(email) = lower(:value)",
				{ :value => login }]
			).first
		else
			where(conditions_dup)
		end
	end
end
