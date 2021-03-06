class UsersController < ApplicationController
  before_action :authorized?, except: [:new, :create] 

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:id] = @user.id.to_s
      redirect_to users_path
    else
      render :new
    end
  end

  def edit
		@user = User.find(params[:id])
	end

  def update
  		@user = User.find(params[:id])

  		if @user.update_attributes(user_params)
    	redirect_to users_path
  		else
  			render :edit
  		end
	end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
      respond_to do |format|
        format.html { redirect_to users_path, notice: 'User was successfully destroyed.' }
        format.json { head :no_content }
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :alias, :email, :phone, :gender, :height, :weight, :description, :password, :password_confirmation, :image, game_ids: [])
  end
end
