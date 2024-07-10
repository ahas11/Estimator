from django.db import models
import math


# Data Base
class Data(models.Model):
     sf_material_expense = 1 # $ per board feet
     paint_material_expense = 2 # $ per sft
     labor_expense = 42 # $ per hour per person
     suits_expense = 75 # $ per person per day
     truck_expense = 100 # $ per day
     protection_expense = 0.3 # $ per ft

     class Meta:
          managed = False

# Input Variables
class Wall(models.Model):
    length = models.FloatField(null=False)
    height = models.FloatField(null=False)
    thickness = models.FloatField(null=False)
    paint = models.BooleanField(null=False, default = False)
    time = models.IntegerField(null=False)
    crew = models.IntegerField(null=False, default=0)
    profit = models.FloatField(null=False)

    # Calculator
    def calculate_expenses(self):
         area = self.length * self.height
         days = math.ceil(self.time / 8)
         sf_total_expense = area * self.thickness * Data.sf_material_expense
         paint_total_expense = area * Data.paint_material_expense if self.paint else 0
         labor_total_expense = self.time * self.crew * Data.labor_expense
         suits_total_expense = days * Data.suits_expense
         truck_total_expense = days * Data.truck_expense
         protection_total_expense = self.length * Data.protection_expense
         total_expense = math.ceil(sf_total_expense + paint_total_expense + labor_total_expense + suits_total_expense + truck_total_expense + protection_total_expense)
         total_sale = math.ceil(total_expense * (1 + (self.profit / 100)))

         # Expenses Breakdown
         print(f'Expenses Breakdown:\n'
               f'Spray Foam Material Expense {sf_total_expense}\n'
               f'Intumescent Paint Material Expense {paint_total_expense}\n'
               f'Labor Expense {labor_total_expense}\n'
               f'Suits/Gloves/Masks Material Expense {suits_total_expense}\n'
               f'Truck Expense {truck_total_expense}\n'
               f'Protection Material Expense {protection_total_expense}\n'
               f'\n'
               f'Total Expense: {total_expense}\n'
               f'Total Sale: {total_sale}\n'
               )

         return sf_total_expense, paint_total_expense, labor_total_expense, suits_total_expense, truck_total_expense, protection_total_expense, total_expense, total_sale