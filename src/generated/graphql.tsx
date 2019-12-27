import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  timestamp: any,
};

/** columns and relationships of "bloxx.address" */
export type Bloxx_Address = {
   __typename?: 'bloxx_address',
  balance?: Maybe<Scalars['Int']>,
  id: Scalars['String'],
  /** An object relationship */
  node: Bloxx_Node,
  nodePublicKey: Scalars['String'],
  /** An array relationship */
  transactions: Array<Bloxx_Transaction>,
  /** An array relationship */
  transactionsByInputaddress: Array<Bloxx_Transaction>,
  /** An aggregated array relationship */
  transactionsByInputaddress_aggregate: Bloxx_Transaction_Aggregate,
  /** An aggregated array relationship */
  transactions_aggregate: Bloxx_Transaction_Aggregate,
};


/** columns and relationships of "bloxx.address" */
export type Bloxx_AddressTransactionsArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};


/** columns and relationships of "bloxx.address" */
export type Bloxx_AddressTransactionsByInputaddressArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};


/** columns and relationships of "bloxx.address" */
export type Bloxx_AddressTransactionsByInputaddress_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};


/** columns and relationships of "bloxx.address" */
export type Bloxx_AddressTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};

/** aggregated selection of "bloxx.address" */
export type Bloxx_Address_Aggregate = {
   __typename?: 'bloxx_address_aggregate',
  aggregate?: Maybe<Bloxx_Address_Aggregate_Fields>,
  nodes: Array<Bloxx_Address>,
};

/** aggregate fields of "bloxx.address" */
export type Bloxx_Address_Aggregate_Fields = {
   __typename?: 'bloxx_address_aggregate_fields',
  avg?: Maybe<Bloxx_Address_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Bloxx_Address_Max_Fields>,
  min?: Maybe<Bloxx_Address_Min_Fields>,
  stddev?: Maybe<Bloxx_Address_Stddev_Fields>,
  stddev_pop?: Maybe<Bloxx_Address_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Bloxx_Address_Stddev_Samp_Fields>,
  sum?: Maybe<Bloxx_Address_Sum_Fields>,
  var_pop?: Maybe<Bloxx_Address_Var_Pop_Fields>,
  var_samp?: Maybe<Bloxx_Address_Var_Samp_Fields>,
  variance?: Maybe<Bloxx_Address_Variance_Fields>,
};


/** aggregate fields of "bloxx.address" */
export type Bloxx_Address_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bloxx_Address_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "bloxx.address" */
export type Bloxx_Address_Aggregate_Order_By = {
  avg?: Maybe<Bloxx_Address_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Bloxx_Address_Max_Order_By>,
  min?: Maybe<Bloxx_Address_Min_Order_By>,
  stddev?: Maybe<Bloxx_Address_Stddev_Order_By>,
  stddev_pop?: Maybe<Bloxx_Address_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Bloxx_Address_Stddev_Samp_Order_By>,
  sum?: Maybe<Bloxx_Address_Sum_Order_By>,
  var_pop?: Maybe<Bloxx_Address_Var_Pop_Order_By>,
  var_samp?: Maybe<Bloxx_Address_Var_Samp_Order_By>,
  variance?: Maybe<Bloxx_Address_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "bloxx.address" */
export type Bloxx_Address_Arr_Rel_Insert_Input = {
  data: Array<Bloxx_Address_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Address_On_Conflict>,
};

/** aggregate avg on columns */
export type Bloxx_Address_Avg_Fields = {
   __typename?: 'bloxx_address_avg_fields',
  balance?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "bloxx.address" */
export type Bloxx_Address_Avg_Order_By = {
  balance?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "bloxx.address". All fields are combined with a logical 'AND'. */
export type Bloxx_Address_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bloxx_Address_Bool_Exp>>>,
  _not?: Maybe<Bloxx_Address_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Bloxx_Address_Bool_Exp>>>,
  balance?: Maybe<Int_Comparison_Exp>,
  id?: Maybe<String_Comparison_Exp>,
  node?: Maybe<Bloxx_Node_Bool_Exp>,
  nodePublicKey?: Maybe<String_Comparison_Exp>,
  transactions?: Maybe<Bloxx_Transaction_Bool_Exp>,
  transactionsByInputaddress?: Maybe<Bloxx_Transaction_Bool_Exp>,
};

/** unique or primary key constraints on table "bloxx.address" */
export enum Bloxx_Address_Constraint {
  /** unique or primary key constraint */
  AddressAddressidKey = 'address_addressid_key',
  /** unique or primary key constraint */
  AddressPkey = 'address_pkey'
}

/** input type for incrementing integer columne in table "bloxx.address" */
export type Bloxx_Address_Inc_Input = {
  balance?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "bloxx.address" */
export type Bloxx_Address_Insert_Input = {
  balance?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  node?: Maybe<Bloxx_Node_Obj_Rel_Insert_Input>,
  nodePublicKey?: Maybe<Scalars['String']>,
  transactions?: Maybe<Bloxx_Transaction_Arr_Rel_Insert_Input>,
  transactionsByInputaddress?: Maybe<Bloxx_Transaction_Arr_Rel_Insert_Input>,
};

/** aggregate max on columns */
export type Bloxx_Address_Max_Fields = {
   __typename?: 'bloxx_address_max_fields',
  balance?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  nodePublicKey?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "bloxx.address" */
export type Bloxx_Address_Max_Order_By = {
  balance?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  nodePublicKey?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Bloxx_Address_Min_Fields = {
   __typename?: 'bloxx_address_min_fields',
  balance?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  nodePublicKey?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "bloxx.address" */
export type Bloxx_Address_Min_Order_By = {
  balance?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  nodePublicKey?: Maybe<Order_By>,
};

/** response of any mutation on the table "bloxx.address" */
export type Bloxx_Address_Mutation_Response = {
   __typename?: 'bloxx_address_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Bloxx_Address>,
};

/** input type for inserting object relation for remote table "bloxx.address" */
export type Bloxx_Address_Obj_Rel_Insert_Input = {
  data: Bloxx_Address_Insert_Input,
  on_conflict?: Maybe<Bloxx_Address_On_Conflict>,
};

/** on conflict condition type for table "bloxx.address" */
export type Bloxx_Address_On_Conflict = {
  constraint: Bloxx_Address_Constraint,
  update_columns: Array<Bloxx_Address_Update_Column>,
  where?: Maybe<Bloxx_Address_Bool_Exp>,
};

/** ordering options when selecting data from "bloxx.address" */
export type Bloxx_Address_Order_By = {
  balance?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  node?: Maybe<Bloxx_Node_Order_By>,
  nodePublicKey?: Maybe<Order_By>,
  transactionsByInputaddress_aggregate?: Maybe<Bloxx_Transaction_Aggregate_Order_By>,
  transactions_aggregate?: Maybe<Bloxx_Transaction_Aggregate_Order_By>,
};

/** select columns of table "bloxx.address" */
export enum Bloxx_Address_Select_Column {
  /** column name */
  Balance = 'balance',
  /** column name */
  Id = 'id',
  /** column name */
  NodePublicKey = 'nodePublicKey'
}

/** input type for updating data in table "bloxx.address" */
export type Bloxx_Address_Set_Input = {
  balance?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  nodePublicKey?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Bloxx_Address_Stddev_Fields = {
   __typename?: 'bloxx_address_stddev_fields',
  balance?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "bloxx.address" */
export type Bloxx_Address_Stddev_Order_By = {
  balance?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Bloxx_Address_Stddev_Pop_Fields = {
   __typename?: 'bloxx_address_stddev_pop_fields',
  balance?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "bloxx.address" */
export type Bloxx_Address_Stddev_Pop_Order_By = {
  balance?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Bloxx_Address_Stddev_Samp_Fields = {
   __typename?: 'bloxx_address_stddev_samp_fields',
  balance?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "bloxx.address" */
export type Bloxx_Address_Stddev_Samp_Order_By = {
  balance?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Bloxx_Address_Sum_Fields = {
   __typename?: 'bloxx_address_sum_fields',
  balance?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "bloxx.address" */
export type Bloxx_Address_Sum_Order_By = {
  balance?: Maybe<Order_By>,
};

/** update columns of table "bloxx.address" */
export enum Bloxx_Address_Update_Column {
  /** column name */
  Balance = 'balance',
  /** column name */
  Id = 'id',
  /** column name */
  NodePublicKey = 'nodePublicKey'
}

/** aggregate var_pop on columns */
export type Bloxx_Address_Var_Pop_Fields = {
   __typename?: 'bloxx_address_var_pop_fields',
  balance?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "bloxx.address" */
export type Bloxx_Address_Var_Pop_Order_By = {
  balance?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Bloxx_Address_Var_Samp_Fields = {
   __typename?: 'bloxx_address_var_samp_fields',
  balance?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "bloxx.address" */
export type Bloxx_Address_Var_Samp_Order_By = {
  balance?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Bloxx_Address_Variance_Fields = {
   __typename?: 'bloxx_address_variance_fields',
  balance?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "bloxx.address" */
export type Bloxx_Address_Variance_Order_By = {
  balance?: Maybe<Order_By>,
};

/** columns and relationships of "bloxx.block" */
export type Bloxx_Block = {
   __typename?: 'bloxx_block',
  blockHash: Scalars['String'],
  blockNumber: Scalars['Int'],
  blockStatus: Scalars['String'],
  createdAt: Scalars['timestamp'],
  difficulty: Scalars['Int'],
  merkleRoot: Scalars['String'],
  nonce: Scalars['Int'],
  previousBlockHash: Scalars['String'],
  /** An array relationship */
  transactions: Array<Bloxx_Transaction>,
  /** An aggregated array relationship */
  transactions_aggregate: Bloxx_Transaction_Aggregate,
};


/** columns and relationships of "bloxx.block" */
export type Bloxx_BlockTransactionsArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};


/** columns and relationships of "bloxx.block" */
export type Bloxx_BlockTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};

/** aggregated selection of "bloxx.block" */
export type Bloxx_Block_Aggregate = {
   __typename?: 'bloxx_block_aggregate',
  aggregate?: Maybe<Bloxx_Block_Aggregate_Fields>,
  nodes: Array<Bloxx_Block>,
};

/** aggregate fields of "bloxx.block" */
export type Bloxx_Block_Aggregate_Fields = {
   __typename?: 'bloxx_block_aggregate_fields',
  avg?: Maybe<Bloxx_Block_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Bloxx_Block_Max_Fields>,
  min?: Maybe<Bloxx_Block_Min_Fields>,
  stddev?: Maybe<Bloxx_Block_Stddev_Fields>,
  stddev_pop?: Maybe<Bloxx_Block_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Bloxx_Block_Stddev_Samp_Fields>,
  sum?: Maybe<Bloxx_Block_Sum_Fields>,
  var_pop?: Maybe<Bloxx_Block_Var_Pop_Fields>,
  var_samp?: Maybe<Bloxx_Block_Var_Samp_Fields>,
  variance?: Maybe<Bloxx_Block_Variance_Fields>,
};


/** aggregate fields of "bloxx.block" */
export type Bloxx_Block_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bloxx_Block_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "bloxx.block" */
export type Bloxx_Block_Aggregate_Order_By = {
  avg?: Maybe<Bloxx_Block_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Bloxx_Block_Max_Order_By>,
  min?: Maybe<Bloxx_Block_Min_Order_By>,
  stddev?: Maybe<Bloxx_Block_Stddev_Order_By>,
  stddev_pop?: Maybe<Bloxx_Block_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Bloxx_Block_Stddev_Samp_Order_By>,
  sum?: Maybe<Bloxx_Block_Sum_Order_By>,
  var_pop?: Maybe<Bloxx_Block_Var_Pop_Order_By>,
  var_samp?: Maybe<Bloxx_Block_Var_Samp_Order_By>,
  variance?: Maybe<Bloxx_Block_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "bloxx.block" */
export type Bloxx_Block_Arr_Rel_Insert_Input = {
  data: Array<Bloxx_Block_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Block_On_Conflict>,
};

/** aggregate avg on columns */
export type Bloxx_Block_Avg_Fields = {
   __typename?: 'bloxx_block_avg_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  nonce?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "bloxx.block" */
export type Bloxx_Block_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "bloxx.block". All fields are combined with a logical 'AND'. */
export type Bloxx_Block_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bloxx_Block_Bool_Exp>>>,
  _not?: Maybe<Bloxx_Block_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Bloxx_Block_Bool_Exp>>>,
  blockHash?: Maybe<String_Comparison_Exp>,
  blockNumber?: Maybe<Int_Comparison_Exp>,
  blockStatus?: Maybe<String_Comparison_Exp>,
  createdAt?: Maybe<Timestamp_Comparison_Exp>,
  difficulty?: Maybe<Int_Comparison_Exp>,
  merkleRoot?: Maybe<String_Comparison_Exp>,
  nonce?: Maybe<Int_Comparison_Exp>,
  previousBlockHash?: Maybe<String_Comparison_Exp>,
  transactions?: Maybe<Bloxx_Transaction_Bool_Exp>,
};

/** unique or primary key constraints on table "bloxx.block" */
export enum Bloxx_Block_Constraint {
  /** unique or primary key constraint */
  BlockBlocknumKey = 'block_blocknum_key',
  /** unique or primary key constraint */
  BlockPkey = 'block_pkey'
}

/** input type for incrementing integer columne in table "bloxx.block" */
export type Bloxx_Block_Inc_Input = {
  blockNumber?: Maybe<Scalars['Int']>,
  difficulty?: Maybe<Scalars['Int']>,
  nonce?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "bloxx.block" */
export type Bloxx_Block_Insert_Input = {
  blockHash?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<Scalars['Int']>,
  blockStatus?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['timestamp']>,
  difficulty?: Maybe<Scalars['Int']>,
  merkleRoot?: Maybe<Scalars['String']>,
  nonce?: Maybe<Scalars['Int']>,
  previousBlockHash?: Maybe<Scalars['String']>,
  transactions?: Maybe<Bloxx_Transaction_Arr_Rel_Insert_Input>,
};

/** aggregate max on columns */
export type Bloxx_Block_Max_Fields = {
   __typename?: 'bloxx_block_max_fields',
  blockHash?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<Scalars['Int']>,
  blockStatus?: Maybe<Scalars['String']>,
  difficulty?: Maybe<Scalars['Int']>,
  merkleRoot?: Maybe<Scalars['String']>,
  nonce?: Maybe<Scalars['Int']>,
  previousBlockHash?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "bloxx.block" */
export type Bloxx_Block_Max_Order_By = {
  blockHash?: Maybe<Order_By>,
  blockNumber?: Maybe<Order_By>,
  blockStatus?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  merkleRoot?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
  previousBlockHash?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Bloxx_Block_Min_Fields = {
   __typename?: 'bloxx_block_min_fields',
  blockHash?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<Scalars['Int']>,
  blockStatus?: Maybe<Scalars['String']>,
  difficulty?: Maybe<Scalars['Int']>,
  merkleRoot?: Maybe<Scalars['String']>,
  nonce?: Maybe<Scalars['Int']>,
  previousBlockHash?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "bloxx.block" */
export type Bloxx_Block_Min_Order_By = {
  blockHash?: Maybe<Order_By>,
  blockNumber?: Maybe<Order_By>,
  blockStatus?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  merkleRoot?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
  previousBlockHash?: Maybe<Order_By>,
};

/** response of any mutation on the table "bloxx.block" */
export type Bloxx_Block_Mutation_Response = {
   __typename?: 'bloxx_block_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Bloxx_Block>,
};

/** input type for inserting object relation for remote table "bloxx.block" */
export type Bloxx_Block_Obj_Rel_Insert_Input = {
  data: Bloxx_Block_Insert_Input,
  on_conflict?: Maybe<Bloxx_Block_On_Conflict>,
};

/** on conflict condition type for table "bloxx.block" */
export type Bloxx_Block_On_Conflict = {
  constraint: Bloxx_Block_Constraint,
  update_columns: Array<Bloxx_Block_Update_Column>,
  where?: Maybe<Bloxx_Block_Bool_Exp>,
};

/** ordering options when selecting data from "bloxx.block" */
export type Bloxx_Block_Order_By = {
  blockHash?: Maybe<Order_By>,
  blockNumber?: Maybe<Order_By>,
  blockStatus?: Maybe<Order_By>,
  createdAt?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  merkleRoot?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
  previousBlockHash?: Maybe<Order_By>,
  transactions_aggregate?: Maybe<Bloxx_Transaction_Aggregate_Order_By>,
};

/** select columns of table "bloxx.block" */
export enum Bloxx_Block_Select_Column {
  /** column name */
  BlockHash = 'blockHash',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockStatus = 'blockStatus',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  MerkleRoot = 'merkleRoot',
  /** column name */
  Nonce = 'nonce',
  /** column name */
  PreviousBlockHash = 'previousBlockHash'
}

/** input type for updating data in table "bloxx.block" */
export type Bloxx_Block_Set_Input = {
  blockHash?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<Scalars['Int']>,
  blockStatus?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['timestamp']>,
  difficulty?: Maybe<Scalars['Int']>,
  merkleRoot?: Maybe<Scalars['String']>,
  nonce?: Maybe<Scalars['Int']>,
  previousBlockHash?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Bloxx_Block_Stddev_Fields = {
   __typename?: 'bloxx_block_stddev_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  nonce?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "bloxx.block" */
export type Bloxx_Block_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Bloxx_Block_Stddev_Pop_Fields = {
   __typename?: 'bloxx_block_stddev_pop_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  nonce?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "bloxx.block" */
export type Bloxx_Block_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Bloxx_Block_Stddev_Samp_Fields = {
   __typename?: 'bloxx_block_stddev_samp_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  nonce?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "bloxx.block" */
export type Bloxx_Block_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Bloxx_Block_Sum_Fields = {
   __typename?: 'bloxx_block_sum_fields',
  blockNumber?: Maybe<Scalars['Int']>,
  difficulty?: Maybe<Scalars['Int']>,
  nonce?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "bloxx.block" */
export type Bloxx_Block_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
};

/** update columns of table "bloxx.block" */
export enum Bloxx_Block_Update_Column {
  /** column name */
  BlockHash = 'blockHash',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockStatus = 'blockStatus',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  MerkleRoot = 'merkleRoot',
  /** column name */
  Nonce = 'nonce',
  /** column name */
  PreviousBlockHash = 'previousBlockHash'
}

/** aggregate var_pop on columns */
export type Bloxx_Block_Var_Pop_Fields = {
   __typename?: 'bloxx_block_var_pop_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  nonce?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "bloxx.block" */
export type Bloxx_Block_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Bloxx_Block_Var_Samp_Fields = {
   __typename?: 'bloxx_block_var_samp_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  nonce?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "bloxx.block" */
export type Bloxx_Block_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Bloxx_Block_Variance_Fields = {
   __typename?: 'bloxx_block_variance_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  nonce?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "bloxx.block" */
export type Bloxx_Block_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
};

/** columns and relationships of "bloxx.node" */
export type Bloxx_Node = {
   __typename?: 'bloxx_node',
  /** An array relationship */
  addresses: Array<Bloxx_Address>,
  /** An aggregated array relationship */
  addresses_aggregate: Bloxx_Address_Aggregate,
  privateKey: Scalars['String'],
  publicKey: Scalars['String'],
};


/** columns and relationships of "bloxx.node" */
export type Bloxx_NodeAddressesArgs = {
  distinct_on?: Maybe<Array<Bloxx_Address_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Address_Order_By>>,
  where?: Maybe<Bloxx_Address_Bool_Exp>
};


/** columns and relationships of "bloxx.node" */
export type Bloxx_NodeAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Address_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Address_Order_By>>,
  where?: Maybe<Bloxx_Address_Bool_Exp>
};

/** aggregated selection of "bloxx.node" */
export type Bloxx_Node_Aggregate = {
   __typename?: 'bloxx_node_aggregate',
  aggregate?: Maybe<Bloxx_Node_Aggregate_Fields>,
  nodes: Array<Bloxx_Node>,
};

/** aggregate fields of "bloxx.node" */
export type Bloxx_Node_Aggregate_Fields = {
   __typename?: 'bloxx_node_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Bloxx_Node_Max_Fields>,
  min?: Maybe<Bloxx_Node_Min_Fields>,
};


/** aggregate fields of "bloxx.node" */
export type Bloxx_Node_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bloxx_Node_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "bloxx.node" */
export type Bloxx_Node_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<Bloxx_Node_Max_Order_By>,
  min?: Maybe<Bloxx_Node_Min_Order_By>,
};

/** input type for inserting array relation for remote table "bloxx.node" */
export type Bloxx_Node_Arr_Rel_Insert_Input = {
  data: Array<Bloxx_Node_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Node_On_Conflict>,
};

/** Boolean expression to filter rows from the table "bloxx.node". All fields are combined with a logical 'AND'. */
export type Bloxx_Node_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bloxx_Node_Bool_Exp>>>,
  _not?: Maybe<Bloxx_Node_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Bloxx_Node_Bool_Exp>>>,
  addresses?: Maybe<Bloxx_Address_Bool_Exp>,
  privateKey?: Maybe<String_Comparison_Exp>,
  publicKey?: Maybe<String_Comparison_Exp>,
};

/** unique or primary key constraints on table "bloxx.node" */
export enum Bloxx_Node_Constraint {
  /** unique or primary key constraint */
  NodeNodeprkKey = 'node_nodeprk_key',
  /** unique or primary key constraint */
  NodeNodepukKey = 'node_nodepuk_key',
  /** unique or primary key constraint */
  NodePkey = 'node_pkey'
}

/** input type for inserting data into table "bloxx.node" */
export type Bloxx_Node_Insert_Input = {
  addresses?: Maybe<Bloxx_Address_Arr_Rel_Insert_Input>,
  privateKey?: Maybe<Scalars['String']>,
  publicKey?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type Bloxx_Node_Max_Fields = {
   __typename?: 'bloxx_node_max_fields',
  privateKey?: Maybe<Scalars['String']>,
  publicKey?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "bloxx.node" */
export type Bloxx_Node_Max_Order_By = {
  privateKey?: Maybe<Order_By>,
  publicKey?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Bloxx_Node_Min_Fields = {
   __typename?: 'bloxx_node_min_fields',
  privateKey?: Maybe<Scalars['String']>,
  publicKey?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "bloxx.node" */
export type Bloxx_Node_Min_Order_By = {
  privateKey?: Maybe<Order_By>,
  publicKey?: Maybe<Order_By>,
};

/** response of any mutation on the table "bloxx.node" */
export type Bloxx_Node_Mutation_Response = {
   __typename?: 'bloxx_node_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Bloxx_Node>,
};

/** input type for inserting object relation for remote table "bloxx.node" */
export type Bloxx_Node_Obj_Rel_Insert_Input = {
  data: Bloxx_Node_Insert_Input,
  on_conflict?: Maybe<Bloxx_Node_On_Conflict>,
};

/** on conflict condition type for table "bloxx.node" */
export type Bloxx_Node_On_Conflict = {
  constraint: Bloxx_Node_Constraint,
  update_columns: Array<Bloxx_Node_Update_Column>,
  where?: Maybe<Bloxx_Node_Bool_Exp>,
};

/** ordering options when selecting data from "bloxx.node" */
export type Bloxx_Node_Order_By = {
  addresses_aggregate?: Maybe<Bloxx_Address_Aggregate_Order_By>,
  privateKey?: Maybe<Order_By>,
  publicKey?: Maybe<Order_By>,
};

/** select columns of table "bloxx.node" */
export enum Bloxx_Node_Select_Column {
  /** column name */
  PrivateKey = 'privateKey',
  /** column name */
  PublicKey = 'publicKey'
}

/** input type for updating data in table "bloxx.node" */
export type Bloxx_Node_Set_Input = {
  privateKey?: Maybe<Scalars['String']>,
  publicKey?: Maybe<Scalars['String']>,
};

/** update columns of table "bloxx.node" */
export enum Bloxx_Node_Update_Column {
  /** column name */
  PrivateKey = 'privateKey',
  /** column name */
  PublicKey = 'publicKey'
}

/** columns and relationships of "bloxx.transaction" */
export type Bloxx_Transaction = {
   __typename?: 'bloxx_transaction',
  /** An object relationship */
  address: Bloxx_Address,
  /** An object relationship */
  addressByInputaddress?: Maybe<Bloxx_Address>,
  /** An object relationship */
  block?: Maybe<Bloxx_Block>,
  blockNumber?: Maybe<Scalars['Int']>,
  inputAddress?: Maybe<Scalars['String']>,
  outputAddress: Scalars['String'],
  signature: Scalars['String'],
  text?: Maybe<Scalars['String']>,
  txHash: Scalars['String'],
  value: Scalars['Int'],
};

/** aggregated selection of "bloxx.transaction" */
export type Bloxx_Transaction_Aggregate = {
   __typename?: 'bloxx_transaction_aggregate',
  aggregate?: Maybe<Bloxx_Transaction_Aggregate_Fields>,
  nodes: Array<Bloxx_Transaction>,
};

/** aggregate fields of "bloxx.transaction" */
export type Bloxx_Transaction_Aggregate_Fields = {
   __typename?: 'bloxx_transaction_aggregate_fields',
  avg?: Maybe<Bloxx_Transaction_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Bloxx_Transaction_Max_Fields>,
  min?: Maybe<Bloxx_Transaction_Min_Fields>,
  stddev?: Maybe<Bloxx_Transaction_Stddev_Fields>,
  stddev_pop?: Maybe<Bloxx_Transaction_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Bloxx_Transaction_Stddev_Samp_Fields>,
  sum?: Maybe<Bloxx_Transaction_Sum_Fields>,
  var_pop?: Maybe<Bloxx_Transaction_Var_Pop_Fields>,
  var_samp?: Maybe<Bloxx_Transaction_Var_Samp_Fields>,
  variance?: Maybe<Bloxx_Transaction_Variance_Fields>,
};


/** aggregate fields of "bloxx.transaction" */
export type Bloxx_Transaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "bloxx.transaction" */
export type Bloxx_Transaction_Aggregate_Order_By = {
  avg?: Maybe<Bloxx_Transaction_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Bloxx_Transaction_Max_Order_By>,
  min?: Maybe<Bloxx_Transaction_Min_Order_By>,
  stddev?: Maybe<Bloxx_Transaction_Stddev_Order_By>,
  stddev_pop?: Maybe<Bloxx_Transaction_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Bloxx_Transaction_Stddev_Samp_Order_By>,
  sum?: Maybe<Bloxx_Transaction_Sum_Order_By>,
  var_pop?: Maybe<Bloxx_Transaction_Var_Pop_Order_By>,
  var_samp?: Maybe<Bloxx_Transaction_Var_Samp_Order_By>,
  variance?: Maybe<Bloxx_Transaction_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "bloxx.transaction" */
export type Bloxx_Transaction_Arr_Rel_Insert_Input = {
  data: Array<Bloxx_Transaction_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Transaction_On_Conflict>,
};

/** aggregate avg on columns */
export type Bloxx_Transaction_Avg_Fields = {
   __typename?: 'bloxx_transaction_avg_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  value?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "bloxx.transaction" */
export type Bloxx_Transaction_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>,
  value?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "bloxx.transaction". All fields are combined with a logical 'AND'. */
export type Bloxx_Transaction_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bloxx_Transaction_Bool_Exp>>>,
  _not?: Maybe<Bloxx_Transaction_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Bloxx_Transaction_Bool_Exp>>>,
  address?: Maybe<Bloxx_Address_Bool_Exp>,
  addressByInputaddress?: Maybe<Bloxx_Address_Bool_Exp>,
  block?: Maybe<Bloxx_Block_Bool_Exp>,
  blockNumber?: Maybe<Int_Comparison_Exp>,
  inputAddress?: Maybe<String_Comparison_Exp>,
  outputAddress?: Maybe<String_Comparison_Exp>,
  signature?: Maybe<String_Comparison_Exp>,
  text?: Maybe<String_Comparison_Exp>,
  txHash?: Maybe<String_Comparison_Exp>,
  value?: Maybe<Int_Comparison_Exp>,
};

/** unique or primary key constraints on table "bloxx.transaction" */
export enum Bloxx_Transaction_Constraint {
  /** unique or primary key constraint */
  TransactionPkey = 'transaction_pkey',
  /** unique or primary key constraint */
  TransactionTxhashKey = 'transaction_txhash_key'
}

/** input type for incrementing integer columne in table "bloxx.transaction" */
export type Bloxx_Transaction_Inc_Input = {
  blockNumber?: Maybe<Scalars['Int']>,
  value?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "bloxx.transaction" */
export type Bloxx_Transaction_Insert_Input = {
  address?: Maybe<Bloxx_Address_Obj_Rel_Insert_Input>,
  addressByInputaddress?: Maybe<Bloxx_Address_Obj_Rel_Insert_Input>,
  block?: Maybe<Bloxx_Block_Obj_Rel_Insert_Input>,
  blockNumber?: Maybe<Scalars['Int']>,
  inputAddress?: Maybe<Scalars['String']>,
  outputAddress?: Maybe<Scalars['String']>,
  signature?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  txHash?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Int']>,
};

/** aggregate max on columns */
export type Bloxx_Transaction_Max_Fields = {
   __typename?: 'bloxx_transaction_max_fields',
  blockNumber?: Maybe<Scalars['Int']>,
  inputAddress?: Maybe<Scalars['String']>,
  outputAddress?: Maybe<Scalars['String']>,
  signature?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  txHash?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Int']>,
};

/** order by max() on columns of table "bloxx.transaction" */
export type Bloxx_Transaction_Max_Order_By = {
  blockNumber?: Maybe<Order_By>,
  inputAddress?: Maybe<Order_By>,
  outputAddress?: Maybe<Order_By>,
  signature?: Maybe<Order_By>,
  text?: Maybe<Order_By>,
  txHash?: Maybe<Order_By>,
  value?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Bloxx_Transaction_Min_Fields = {
   __typename?: 'bloxx_transaction_min_fields',
  blockNumber?: Maybe<Scalars['Int']>,
  inputAddress?: Maybe<Scalars['String']>,
  outputAddress?: Maybe<Scalars['String']>,
  signature?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  txHash?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Int']>,
};

/** order by min() on columns of table "bloxx.transaction" */
export type Bloxx_Transaction_Min_Order_By = {
  blockNumber?: Maybe<Order_By>,
  inputAddress?: Maybe<Order_By>,
  outputAddress?: Maybe<Order_By>,
  signature?: Maybe<Order_By>,
  text?: Maybe<Order_By>,
  txHash?: Maybe<Order_By>,
  value?: Maybe<Order_By>,
};

/** response of any mutation on the table "bloxx.transaction" */
export type Bloxx_Transaction_Mutation_Response = {
   __typename?: 'bloxx_transaction_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Bloxx_Transaction>,
};

/** input type for inserting object relation for remote table "bloxx.transaction" */
export type Bloxx_Transaction_Obj_Rel_Insert_Input = {
  data: Bloxx_Transaction_Insert_Input,
  on_conflict?: Maybe<Bloxx_Transaction_On_Conflict>,
};

/** on conflict condition type for table "bloxx.transaction" */
export type Bloxx_Transaction_On_Conflict = {
  constraint: Bloxx_Transaction_Constraint,
  update_columns: Array<Bloxx_Transaction_Update_Column>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>,
};

/** ordering options when selecting data from "bloxx.transaction" */
export type Bloxx_Transaction_Order_By = {
  address?: Maybe<Bloxx_Address_Order_By>,
  addressByInputaddress?: Maybe<Bloxx_Address_Order_By>,
  block?: Maybe<Bloxx_Block_Order_By>,
  blockNumber?: Maybe<Order_By>,
  inputAddress?: Maybe<Order_By>,
  outputAddress?: Maybe<Order_By>,
  signature?: Maybe<Order_By>,
  text?: Maybe<Order_By>,
  txHash?: Maybe<Order_By>,
  value?: Maybe<Order_By>,
};

/** select columns of table "bloxx.transaction" */
export enum Bloxx_Transaction_Select_Column {
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  InputAddress = 'inputAddress',
  /** column name */
  OutputAddress = 'outputAddress',
  /** column name */
  Signature = 'signature',
  /** column name */
  Text = 'text',
  /** column name */
  TxHash = 'txHash',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "bloxx.transaction" */
export type Bloxx_Transaction_Set_Input = {
  blockNumber?: Maybe<Scalars['Int']>,
  inputAddress?: Maybe<Scalars['String']>,
  outputAddress?: Maybe<Scalars['String']>,
  signature?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  txHash?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Int']>,
};

/** aggregate stddev on columns */
export type Bloxx_Transaction_Stddev_Fields = {
   __typename?: 'bloxx_transaction_stddev_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  value?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "bloxx.transaction" */
export type Bloxx_Transaction_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>,
  value?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Bloxx_Transaction_Stddev_Pop_Fields = {
   __typename?: 'bloxx_transaction_stddev_pop_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  value?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "bloxx.transaction" */
export type Bloxx_Transaction_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>,
  value?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Bloxx_Transaction_Stddev_Samp_Fields = {
   __typename?: 'bloxx_transaction_stddev_samp_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  value?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "bloxx.transaction" */
export type Bloxx_Transaction_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>,
  value?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Bloxx_Transaction_Sum_Fields = {
   __typename?: 'bloxx_transaction_sum_fields',
  blockNumber?: Maybe<Scalars['Int']>,
  value?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "bloxx.transaction" */
export type Bloxx_Transaction_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>,
  value?: Maybe<Order_By>,
};

/** update columns of table "bloxx.transaction" */
export enum Bloxx_Transaction_Update_Column {
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  InputAddress = 'inputAddress',
  /** column name */
  OutputAddress = 'outputAddress',
  /** column name */
  Signature = 'signature',
  /** column name */
  Text = 'text',
  /** column name */
  TxHash = 'txHash',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Bloxx_Transaction_Var_Pop_Fields = {
   __typename?: 'bloxx_transaction_var_pop_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  value?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "bloxx.transaction" */
export type Bloxx_Transaction_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>,
  value?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Bloxx_Transaction_Var_Samp_Fields = {
   __typename?: 'bloxx_transaction_var_samp_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  value?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "bloxx.transaction" */
export type Bloxx_Transaction_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>,
  value?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Bloxx_Transaction_Variance_Fields = {
   __typename?: 'bloxx_transaction_variance_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  value?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "bloxx.transaction" */
export type Bloxx_Transaction_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>,
  value?: Maybe<Order_By>,
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>,
  _gt?: Maybe<Scalars['Int']>,
  _gte?: Maybe<Scalars['Int']>,
  _in?: Maybe<Array<Scalars['Int']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Int']>,
  _lte?: Maybe<Scalars['Int']>,
  _neq?: Maybe<Scalars['Int']>,
  _nin?: Maybe<Array<Scalars['Int']>>,
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root',
  /** delete data from the table: "bloxx.address" */
  delete_bloxx_address?: Maybe<Bloxx_Address_Mutation_Response>,
  /** delete data from the table: "bloxx.block" */
  delete_bloxx_block?: Maybe<Bloxx_Block_Mutation_Response>,
  /** delete data from the table: "bloxx.node" */
  delete_bloxx_node?: Maybe<Bloxx_Node_Mutation_Response>,
  /** delete data from the table: "bloxx.transaction" */
  delete_bloxx_transaction?: Maybe<Bloxx_Transaction_Mutation_Response>,
  /** insert data into the table: "bloxx.address" */
  insert_bloxx_address?: Maybe<Bloxx_Address_Mutation_Response>,
  /** insert data into the table: "bloxx.block" */
  insert_bloxx_block?: Maybe<Bloxx_Block_Mutation_Response>,
  /** insert data into the table: "bloxx.node" */
  insert_bloxx_node?: Maybe<Bloxx_Node_Mutation_Response>,
  /** insert data into the table: "bloxx.transaction" */
  insert_bloxx_transaction?: Maybe<Bloxx_Transaction_Mutation_Response>,
  /** update data of the table: "bloxx.address" */
  update_bloxx_address?: Maybe<Bloxx_Address_Mutation_Response>,
  /** update data of the table: "bloxx.block" */
  update_bloxx_block?: Maybe<Bloxx_Block_Mutation_Response>,
  /** update data of the table: "bloxx.node" */
  update_bloxx_node?: Maybe<Bloxx_Node_Mutation_Response>,
  /** update data of the table: "bloxx.transaction" */
  update_bloxx_transaction?: Maybe<Bloxx_Transaction_Mutation_Response>,
};


/** mutation root */
export type Mutation_RootDelete_Bloxx_AddressArgs = {
  where: Bloxx_Address_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_Bloxx_BlockArgs = {
  where: Bloxx_Block_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_Bloxx_NodeArgs = {
  where: Bloxx_Node_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_Bloxx_TransactionArgs = {
  where: Bloxx_Transaction_Bool_Exp
};


/** mutation root */
export type Mutation_RootInsert_Bloxx_AddressArgs = {
  objects: Array<Bloxx_Address_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Address_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_Bloxx_BlockArgs = {
  objects: Array<Bloxx_Block_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Block_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_Bloxx_NodeArgs = {
  objects: Array<Bloxx_Node_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Node_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_Bloxx_TransactionArgs = {
  objects: Array<Bloxx_Transaction_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Transaction_On_Conflict>
};


/** mutation root */
export type Mutation_RootUpdate_Bloxx_AddressArgs = {
  _inc?: Maybe<Bloxx_Address_Inc_Input>,
  _set?: Maybe<Bloxx_Address_Set_Input>,
  where: Bloxx_Address_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_Bloxx_BlockArgs = {
  _inc?: Maybe<Bloxx_Block_Inc_Input>,
  _set?: Maybe<Bloxx_Block_Set_Input>,
  where: Bloxx_Block_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_Bloxx_NodeArgs = {
  _set?: Maybe<Bloxx_Node_Set_Input>,
  where: Bloxx_Node_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_Bloxx_TransactionArgs = {
  _inc?: Maybe<Bloxx_Transaction_Inc_Input>,
  _set?: Maybe<Bloxx_Transaction_Set_Input>,
  where: Bloxx_Transaction_Bool_Exp
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
   __typename?: 'query_root',
  /** fetch data from the table: "bloxx.address" */
  bloxx_address: Array<Bloxx_Address>,
  /** fetch aggregated fields from the table: "bloxx.address" */
  bloxx_address_aggregate: Bloxx_Address_Aggregate,
  /** fetch data from the table: "bloxx.address" using primary key columns */
  bloxx_address_by_pk?: Maybe<Bloxx_Address>,
  /** fetch data from the table: "bloxx.block" */
  bloxx_block: Array<Bloxx_Block>,
  /** fetch aggregated fields from the table: "bloxx.block" */
  bloxx_block_aggregate: Bloxx_Block_Aggregate,
  /** fetch data from the table: "bloxx.block" using primary key columns */
  bloxx_block_by_pk?: Maybe<Bloxx_Block>,
  /** fetch data from the table: "bloxx.node" */
  bloxx_node: Array<Bloxx_Node>,
  /** fetch aggregated fields from the table: "bloxx.node" */
  bloxx_node_aggregate: Bloxx_Node_Aggregate,
  /** fetch data from the table: "bloxx.node" using primary key columns */
  bloxx_node_by_pk?: Maybe<Bloxx_Node>,
  /** fetch data from the table: "bloxx.transaction" */
  bloxx_transaction: Array<Bloxx_Transaction>,
  /** fetch aggregated fields from the table: "bloxx.transaction" */
  bloxx_transaction_aggregate: Bloxx_Transaction_Aggregate,
  /** fetch data from the table: "bloxx.transaction" using primary key columns */
  bloxx_transaction_by_pk?: Maybe<Bloxx_Transaction>,
};


/** query root */
export type Query_RootBloxx_AddressArgs = {
  distinct_on?: Maybe<Array<Bloxx_Address_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Address_Order_By>>,
  where?: Maybe<Bloxx_Address_Bool_Exp>
};


/** query root */
export type Query_RootBloxx_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Address_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Address_Order_By>>,
  where?: Maybe<Bloxx_Address_Bool_Exp>
};


/** query root */
export type Query_RootBloxx_Address_By_PkArgs = {
  id: Scalars['String']
};


/** query root */
export type Query_RootBloxx_BlockArgs = {
  distinct_on?: Maybe<Array<Bloxx_Block_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Block_Order_By>>,
  where?: Maybe<Bloxx_Block_Bool_Exp>
};


/** query root */
export type Query_RootBloxx_Block_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Block_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Block_Order_By>>,
  where?: Maybe<Bloxx_Block_Bool_Exp>
};


/** query root */
export type Query_RootBloxx_Block_By_PkArgs = {
  blockNumber: Scalars['Int']
};


/** query root */
export type Query_RootBloxx_NodeArgs = {
  distinct_on?: Maybe<Array<Bloxx_Node_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Node_Order_By>>,
  where?: Maybe<Bloxx_Node_Bool_Exp>
};


/** query root */
export type Query_RootBloxx_Node_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Node_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Node_Order_By>>,
  where?: Maybe<Bloxx_Node_Bool_Exp>
};


/** query root */
export type Query_RootBloxx_Node_By_PkArgs = {
  publicKey: Scalars['String']
};


/** query root */
export type Query_RootBloxx_TransactionArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};


/** query root */
export type Query_RootBloxx_Transaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};


/** query root */
export type Query_RootBloxx_Transaction_By_PkArgs = {
  txHash: Scalars['String']
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root',
  /** fetch data from the table: "bloxx.address" */
  bloxx_address: Array<Bloxx_Address>,
  /** fetch aggregated fields from the table: "bloxx.address" */
  bloxx_address_aggregate: Bloxx_Address_Aggregate,
  /** fetch data from the table: "bloxx.address" using primary key columns */
  bloxx_address_by_pk?: Maybe<Bloxx_Address>,
  /** fetch data from the table: "bloxx.block" */
  bloxx_block: Array<Bloxx_Block>,
  /** fetch aggregated fields from the table: "bloxx.block" */
  bloxx_block_aggregate: Bloxx_Block_Aggregate,
  /** fetch data from the table: "bloxx.block" using primary key columns */
  bloxx_block_by_pk?: Maybe<Bloxx_Block>,
  /** fetch data from the table: "bloxx.node" */
  bloxx_node: Array<Bloxx_Node>,
  /** fetch aggregated fields from the table: "bloxx.node" */
  bloxx_node_aggregate: Bloxx_Node_Aggregate,
  /** fetch data from the table: "bloxx.node" using primary key columns */
  bloxx_node_by_pk?: Maybe<Bloxx_Node>,
  /** fetch data from the table: "bloxx.transaction" */
  bloxx_transaction: Array<Bloxx_Transaction>,
  /** fetch aggregated fields from the table: "bloxx.transaction" */
  bloxx_transaction_aggregate: Bloxx_Transaction_Aggregate,
  /** fetch data from the table: "bloxx.transaction" using primary key columns */
  bloxx_transaction_by_pk?: Maybe<Bloxx_Transaction>,
};


/** subscription root */
export type Subscription_RootBloxx_AddressArgs = {
  distinct_on?: Maybe<Array<Bloxx_Address_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Address_Order_By>>,
  where?: Maybe<Bloxx_Address_Bool_Exp>
};


/** subscription root */
export type Subscription_RootBloxx_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Address_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Address_Order_By>>,
  where?: Maybe<Bloxx_Address_Bool_Exp>
};


/** subscription root */
export type Subscription_RootBloxx_Address_By_PkArgs = {
  id: Scalars['String']
};


/** subscription root */
export type Subscription_RootBloxx_BlockArgs = {
  distinct_on?: Maybe<Array<Bloxx_Block_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Block_Order_By>>,
  where?: Maybe<Bloxx_Block_Bool_Exp>
};


/** subscription root */
export type Subscription_RootBloxx_Block_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Block_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Block_Order_By>>,
  where?: Maybe<Bloxx_Block_Bool_Exp>
};


/** subscription root */
export type Subscription_RootBloxx_Block_By_PkArgs = {
  blockNumber: Scalars['Int']
};


/** subscription root */
export type Subscription_RootBloxx_NodeArgs = {
  distinct_on?: Maybe<Array<Bloxx_Node_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Node_Order_By>>,
  where?: Maybe<Bloxx_Node_Bool_Exp>
};


/** subscription root */
export type Subscription_RootBloxx_Node_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Node_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Node_Order_By>>,
  where?: Maybe<Bloxx_Node_Bool_Exp>
};


/** subscription root */
export type Subscription_RootBloxx_Node_By_PkArgs = {
  publicKey: Scalars['String']
};


/** subscription root */
export type Subscription_RootBloxx_TransactionArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};


/** subscription root */
export type Subscription_RootBloxx_Transaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};


/** subscription root */
export type Subscription_RootBloxx_Transaction_By_PkArgs = {
  txHash: Scalars['String']
};


/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>,
  _gt?: Maybe<Scalars['timestamp']>,
  _gte?: Maybe<Scalars['timestamp']>,
  _in?: Maybe<Array<Scalars['timestamp']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamp']>,
  _lte?: Maybe<Scalars['timestamp']>,
  _neq?: Maybe<Scalars['timestamp']>,
  _nin?: Maybe<Array<Scalars['timestamp']>>,
};

export type UpsertBlockMutationVariables = {
  objects: Array<Bloxx_Block_Insert_Input>
};


export type UpsertBlockMutation = (
  { __typename?: 'mutation_root' }
  & { insert_bloxx_block: Maybe<(
    { __typename?: 'bloxx_block_mutation_response' }
    & Pick<Bloxx_Block_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'bloxx_block' }
      & Pick<Bloxx_Block, 'blockHash' | 'blockNumber' | 'blockStatus' | 'createdAt' | 'difficulty' | 'merkleRoot' | 'nonce' | 'previousBlockHash'>
      & { transactions: Array<(
        { __typename?: 'bloxx_transaction' }
        & Pick<Bloxx_Transaction, 'blockNumber' | 'inputAddress' | 'outputAddress' | 'signature' | 'text' | 'txHash' | 'value'>
      )> }
    )> }
  )> }
);

export type InsertNodeMutationVariables = {
  publicKey?: Maybe<Scalars['String']>,
  privateKey?: Maybe<Scalars['String']>,
  address?: Maybe<Scalars['String']>
};


export type InsertNodeMutation = (
  { __typename?: 'mutation_root' }
  & { insert_bloxx_node: Maybe<(
    { __typename?: 'bloxx_node_mutation_response' }
    & Pick<Bloxx_Node_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'bloxx_node' }
      & Pick<Bloxx_Node, 'publicKey' | 'privateKey'>
      & { addresses: Array<(
        { __typename?: 'bloxx_address' }
        & Pick<Bloxx_Address, 'id'>
      )> }
    )> }
  )> }
);

export type InsertTransactionMutationVariables = {
  inputAddress?: Maybe<Scalars['String']>,
  outputAddress?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Int']>,
  signature?: Maybe<Scalars['String']>,
  txHash?: Maybe<Scalars['String']>
};


export type InsertTransactionMutation = (
  { __typename?: 'mutation_root' }
  & { insert_bloxx_transaction: Maybe<(
    { __typename?: 'bloxx_transaction_mutation_response' }
    & Pick<Bloxx_Transaction_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'bloxx_transaction' }
      & Pick<Bloxx_Transaction, 'inputAddress' | 'outputAddress' | 'signature' | 'txHash' | 'value'>
    )> }
  )> }
);

export type NodesQueryVariables = {};


export type NodesQuery = (
  { __typename?: 'query_root' }
  & { bloxx_node: Array<(
    { __typename?: 'bloxx_node' }
    & Pick<Bloxx_Node, 'publicKey' | 'privateKey'>
    & { addresses: Array<(
      { __typename?: 'bloxx_address' }
      & Pick<Bloxx_Address, 'id'>
    )> }
  )> }
);

export type TransactionsQueryVariables = {};


export type TransactionsQuery = (
  { __typename: 'query_root' }
  & { bloxx_transaction: Array<(
    { __typename?: 'bloxx_transaction' }
    & Pick<Bloxx_Transaction, 'inputAddress' | 'outputAddress' | 'text' | 'txHash' | 'value'>
  )> }
);

export type OnNewNodeAddedSubscriptionVariables = {};


export type OnNewNodeAddedSubscription = (
  { __typename?: 'subscription_root' }
  & { bloxx_node: Array<(
    { __typename?: 'bloxx_node' }
    & Pick<Bloxx_Node, 'publicKey'>
    & { addresses: Array<(
      { __typename?: 'bloxx_address' }
      & Pick<Bloxx_Address, 'id'>
    )> }
  )> }
);

export type OnNewTransactionAddedSubscriptionVariables = {};


export type OnNewTransactionAddedSubscription = (
  { __typename?: 'subscription_root' }
  & { bloxx_transaction: Array<(
    { __typename?: 'bloxx_transaction' }
    & Pick<Bloxx_Transaction, 'inputAddress' | 'outputAddress' | 'signature' | 'txHash' | 'value'>
  )> }
);


export const UpsertBlockDocument = gql`
    mutation upsertBlock($objects: [bloxx_block_insert_input!]!) {
  insert_bloxx_block(objects: $objects) {
    affected_rows
    returning {
      blockHash
      blockNumber
      blockStatus
      createdAt
      difficulty
      merkleRoot
      nonce
      previousBlockHash
      transactions {
        blockNumber
        inputAddress
        outputAddress
        signature
        text
        txHash
        value
      }
    }
  }
}
    `;
export type UpsertBlockMutationFn = ApolloReactCommon.MutationFunction<UpsertBlockMutation, UpsertBlockMutationVariables>;

/**
 * __useUpsertBlockMutation__
 *
 * To run a mutation, you first call `useUpsertBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertBlockMutation, { data, loading, error }] = useUpsertBlockMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useUpsertBlockMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpsertBlockMutation, UpsertBlockMutationVariables>) {
        return ApolloReactHooks.useMutation<UpsertBlockMutation, UpsertBlockMutationVariables>(UpsertBlockDocument, baseOptions);
      }
export type UpsertBlockMutationHookResult = ReturnType<typeof useUpsertBlockMutation>;
export type UpsertBlockMutationResult = ApolloReactCommon.MutationResult<UpsertBlockMutation>;
export type UpsertBlockMutationOptions = ApolloReactCommon.BaseMutationOptions<UpsertBlockMutation, UpsertBlockMutationVariables>;
export const InsertNodeDocument = gql`
    mutation insertNode($publicKey: String, $privateKey: String, $address: String) {
  insert_bloxx_node(objects: {publicKey: $publicKey, privateKey: $privateKey, addresses: {data: {id: $address}}}) {
    affected_rows
    returning {
      publicKey
      privateKey
      addresses {
        id
      }
    }
  }
}
    `;
export type InsertNodeMutationFn = ApolloReactCommon.MutationFunction<InsertNodeMutation, InsertNodeMutationVariables>;

/**
 * __useInsertNodeMutation__
 *
 * To run a mutation, you first call `useInsertNodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertNodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertNodeMutation, { data, loading, error }] = useInsertNodeMutation({
 *   variables: {
 *      publicKey: // value for 'publicKey'
 *      privateKey: // value for 'privateKey'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useInsertNodeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertNodeMutation, InsertNodeMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertNodeMutation, InsertNodeMutationVariables>(InsertNodeDocument, baseOptions);
      }
export type InsertNodeMutationHookResult = ReturnType<typeof useInsertNodeMutation>;
export type InsertNodeMutationResult = ApolloReactCommon.MutationResult<InsertNodeMutation>;
export type InsertNodeMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertNodeMutation, InsertNodeMutationVariables>;
export const InsertTransactionDocument = gql`
    mutation insertTransaction($inputAddress: String, $outputAddress: String, $value: Int, $signature: String, $txHash: String) {
  insert_bloxx_transaction(objects: {inputAddress: $inputAddress, outputAddress: $outputAddress, value: $value, signature: $signature, txHash: $txHash}) {
    affected_rows
    returning {
      inputAddress
      outputAddress
      signature
      txHash
      value
    }
  }
}
    `;
export type InsertTransactionMutationFn = ApolloReactCommon.MutationFunction<InsertTransactionMutation, InsertTransactionMutationVariables>;

/**
 * __useInsertTransactionMutation__
 *
 * To run a mutation, you first call `useInsertTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTransactionMutation, { data, loading, error }] = useInsertTransactionMutation({
 *   variables: {
 *      inputAddress: // value for 'inputAddress'
 *      outputAddress: // value for 'outputAddress'
 *      value: // value for 'value'
 *      signature: // value for 'signature'
 *      txHash: // value for 'txHash'
 *   },
 * });
 */
export function useInsertTransactionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertTransactionMutation, InsertTransactionMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertTransactionMutation, InsertTransactionMutationVariables>(InsertTransactionDocument, baseOptions);
      }
export type InsertTransactionMutationHookResult = ReturnType<typeof useInsertTransactionMutation>;
export type InsertTransactionMutationResult = ApolloReactCommon.MutationResult<InsertTransactionMutation>;
export type InsertTransactionMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertTransactionMutation, InsertTransactionMutationVariables>;
export const NodesDocument = gql`
    query Nodes {
  bloxx_node {
    publicKey
    privateKey
    addresses {
      id
    }
  }
}
    `;

/**
 * __useNodesQuery__
 *
 * To run a query within a React component, call `useNodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNodesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNodesQuery({
 *   variables: {
 *   },
 * });
 */
export function useNodesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NodesQuery, NodesQueryVariables>) {
        return ApolloReactHooks.useQuery<NodesQuery, NodesQueryVariables>(NodesDocument, baseOptions);
      }
export function useNodesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NodesQuery, NodesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NodesQuery, NodesQueryVariables>(NodesDocument, baseOptions);
        }
export type NodesQueryHookResult = ReturnType<typeof useNodesQuery>;
export type NodesLazyQueryHookResult = ReturnType<typeof useNodesLazyQuery>;
export type NodesQueryResult = ApolloReactCommon.QueryResult<NodesQuery, NodesQueryVariables>;
export const TransactionsDocument = gql`
    query Transactions {
  __typename
  bloxx_transaction {
    inputAddress
    outputAddress
    text
    txHash
    value
  }
}
    `;

/**
 * __useTransactionsQuery__
 *
 * To run a query within a React component, call `useTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTransactionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
        return ApolloReactHooks.useQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, baseOptions);
      }
export function useTransactionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, baseOptions);
        }
export type TransactionsQueryHookResult = ReturnType<typeof useTransactionsQuery>;
export type TransactionsLazyQueryHookResult = ReturnType<typeof useTransactionsLazyQuery>;
export type TransactionsQueryResult = ApolloReactCommon.QueryResult<TransactionsQuery, TransactionsQueryVariables>;
export const OnNewNodeAddedDocument = gql`
    subscription onNewNodeAdded {
  bloxx_node {
    publicKey
    addresses {
      id
    }
  }
}
    `;

/**
 * __useOnNewNodeAddedSubscription__
 *
 * To run a query within a React component, call `useOnNewNodeAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnNewNodeAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnNewNodeAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnNewNodeAddedSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<OnNewNodeAddedSubscription, OnNewNodeAddedSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<OnNewNodeAddedSubscription, OnNewNodeAddedSubscriptionVariables>(OnNewNodeAddedDocument, baseOptions);
      }
export type OnNewNodeAddedSubscriptionHookResult = ReturnType<typeof useOnNewNodeAddedSubscription>;
export type OnNewNodeAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<OnNewNodeAddedSubscription>;
export const OnNewTransactionAddedDocument = gql`
    subscription onNewTransactionAdded {
  bloxx_transaction {
    inputAddress
    outputAddress
    signature
    txHash
    value
  }
}
    `;

/**
 * __useOnNewTransactionAddedSubscription__
 *
 * To run a query within a React component, call `useOnNewTransactionAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnNewTransactionAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnNewTransactionAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnNewTransactionAddedSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<OnNewTransactionAddedSubscription, OnNewTransactionAddedSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<OnNewTransactionAddedSubscription, OnNewTransactionAddedSubscriptionVariables>(OnNewTransactionAddedDocument, baseOptions);
      }
export type OnNewTransactionAddedSubscriptionHookResult = ReturnType<typeof useOnNewTransactionAddedSubscription>;
export type OnNewTransactionAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<OnNewTransactionAddedSubscription>;