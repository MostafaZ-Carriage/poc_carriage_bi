class OrderCountsController < ApplicationController
  def order_count; end

  def get_order_count
    render json: {number: OrderCount.first.number}
  end
end