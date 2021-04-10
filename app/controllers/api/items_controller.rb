class Api::ItemsController < ApplicationController
  before_action :set_category
  
  def index
    render json: Item.all
  end
  
  def show
    @item = Item.find(params[:id])
    render json: @item
  end
 
  def create
    @item = Item.new(item_params)
    if @item.save
      render json: @item
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end
  
  
  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
      render json: @item
    else
      render json: { errors: @item.errors }, status: :unprocessable_entity
    end
  end
  
  
  def destroy
    Item.find(params[:id]).destroy
    @item.destroy
    render json: { message: ' deleted' }
  end
  
  private
    def item_params
      params.require(:item).permit(:name, :price)
    end
    
    def set_category
      @category = Category.find(params[:category_id])
    end
end
