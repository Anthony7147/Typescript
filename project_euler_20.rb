def factorial_value_sum_generator(factorial)
	arr = (1..factorial).to_a.reverse.each { |i| factorial += factorial * (i - 1) }
	factorial.to_string(//).map(&:to_i).inject(:+)
end

p factorial_value_sum_generator(100)

