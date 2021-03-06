class GamesController < ApplicationController
  before_action :authorized?,  except: :index

  def index
    @games = Game.all
    respond_to do |format|
    format.html {
        render
    }
    format.json {
        render json: @games
    }
  end

  end

  def show
    @game = Game.find(params[:id])
  end

  def new
    @game = Game.new
  end

  def create
    # @game.user_id = current_user.id
    @game = Game.new(game_params)
    if @game.save
      # session[:id] = @user.id.to_s
      redirect_to users_path
    else
      render :new
    end
  end

  def edit
    @game = Game.find(params[:id])
  end

  def update
      @game = Game.find(params[:id])

      if @game.update_attributes(game_params)
      redirect_to users_path
      else
        render :edit
      end
  end

  def destroy
    @game = Game.find(params[:id])
    @game.destroy
      respond_to do |format|
        format.html { redirect_to users_path, notice: 'Game was successfully destroyed.' }
        format.json { head :no_content }
    end
  end

  def AddUserToGame
    @game.users.push(current_user)
  end

  private

  def game_params
    params.require(:game).permit(:title, :court_name, :court_address, :sport, :game_at, :spots, :fee, :description, user_ids: [])
  end
end
