class Api::CategoriesController < ApplicationController
  def index
    render json: Categorie.all
  end
  
  
  def show
    @categorie = Categorie.find(params[:id])
    render json: @categorie
  end
 
  

  
  def create
    @categorie = Categorie.new(categorie_params)
    if @categorie.save
      render json: @categorie
    else
      render json: { errors: categorie.errors }, status: :unprocessable_entity
    end
  end
  
  
  
  def update
    @categorie = Categorie.find(params[:id])
    if @categorie.update(categorie_params)
      render json: @categorie
    else
      render json: { errors: @categorie.errors }, status: :unprocessable_entity
    end
  end
  
  
  def destroy
    Categorie.find(params[:id]).destroy
    @categorie.destroy
    render json: { message: ' deleted' }
  end
  
  private
    def model_name_params
      params.require(:categorie).permit(:genre, :img)
    end
 
end
