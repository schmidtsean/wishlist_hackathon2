class Api::CategoriesController < ApplicationController
  before_action :set_category, only: [:update, :show, :destroy]
  def index
    render json: Category.all
  end
  
  def show
    render json: @category
  end
 
  def create
    @category = Category.new(category_params)
    if @category.save
      render json: @category
    else
      render json: { errors: category.errors }, status: :unprocessable_entity
    end
  end
  
  
  def update
    @category = Category.find(params[:id])
    if @category.update(category_params)
      render json: @category
    else
      render json: { errors: @category.errors }, status: :unprocessable_entity
    end
  end
  
  
  def destroy
    @category.destroy
    render json: { message: ' deleted' }
  end
  
  private
    def category_params
      params.require(:category).permit(:genre, :img)
    end

    def set_category
      @category = Category.find(params[:id])
    end
end
